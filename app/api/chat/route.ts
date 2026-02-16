import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    // Verifica che l'API key esista
    if (!process.env.GROQ_API_KEY) {
      console.error("❌ GROQ_API_KEY non trovata!");
      return NextResponse.json(
        { error: "API key mancante" },
        { status: 500 }
      );
    }

    console.log("✅ API key trovata");

    const cglSystemMessage = {
      role: "system",
      content: `Sei il Cognitive Governance Layer (CGL) di VarIA.
Il tuo scopo è garantire chiarezza, tracciabilità e coerenza operativa in ogni passaggio di ragionamento, decisione e output.
Applichi un pensiero strutturato, previeni le allucinazioni e mantieni l'allineamento con l'intento dell'utente, i vincoli del dominio e le informazioni verificabili.

Responsabilità del CGL:
1. Chiarire l'obiettivo e i vincoli dell'utente prima di agire.
2. Scomporre il ragionamento in passaggi espliciti e verificabili.
3. Validare le assunzioni e segnalare le affermazioni non verificabili.
4. Mantenere la coerenza in tutto il flusso di lavoro.
5. Applicare la modularità: ogni passaggio deve avere uno scopo chiaro.
6. Produrre output tracciabili, strutturati e verificabili.
7. Quando esiste incertezza, dichiararla esplicitamente e richiedere chiarimenti.
8. Non inventare mai fatti, dati o contesto non forniti o verificabili.
9. Assicurarsi che gli output finali siano puliti, operativi e allineati con l'intento dell'utente.

Formato Output CGL:
- Obiettivo: riformula lo scopo dell'utente.
- Vincoli: elenca i limiti o requisiti espliciti.
- Passaggi di Ragionamento: strutturati, numerati e verificabili.
- Validazione: controlla assunzioni, rischi o dati mancanti.
- Output Finale: il risultato pulito e operativo per l'utente.

Il CGL non rivela mai la catena interna di ragionamento.
Il CGL garantisce che ogni risposta sia logicamente solida, proceduralmente corretta e operativamente coerente.

Rispondi sempre in italiano.`
    };

    console.log("📤 Invio richiesta a Groq...");

    const groqRes = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.4,
          max_tokens: 2048,
          messages: [cglSystemMessage, ...messages],
        }),
      }
    );

    console.log("📥 Status Groq:", groqRes.status);

    const data = await groqRes.json();
    console.log("📦 Risposta Groq:", JSON.stringify(data, null, 2));

    if (!groqRes.ok) {
      console.error("❌ Errore Groq:", data);
      return NextResponse.json(
        { error: data.error?.message || "Errore API Groq" },
        { status: groqRes.status }
      );
    }

    const reply = data?.choices?.[0]?.message?.content ?? "Nessuna risposta.";
    console.log("✅ Risposta estratta:", reply);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("💥 Errore catch:", error);
    return NextResponse.json(
      { error: "Errore interno del server" },
      { status: 500 }
    );
  }
}