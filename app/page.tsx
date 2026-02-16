'use client';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 fade-in">

      {/* LOGO ANIMATO */}
      <div className="mb-6 relative">

        {/* WRAPPER DEL BAGLIORE (NON RUOTA) */}
        <div className="w-36 h-36 rounded-full flex items-center justify-center glow-pulse">

          {/* SECONDO ANELLO SOTTILE E LUMINOSO */}
          <div
            className="absolute w-32 h-32 rounded-full border border-emerald-400/30
                       animate-spin-reverse-slow"
          ></div>

          {/* ANELLO PRINCIPALE CHE RUOTA */}
          <div
            className="w-28 h-28 rounded-full relative
                       bg-gradient-to-br from-emerald-700 via-black to-violet-700
                       animate-spin-slow
                       flex items-center justify-center"
          >

            {/* CERCHIO INTERNO FERMO + BORDO INTERNO + PULSAZIONE */}
            <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center spin-reverse relative pulse-soft">

              {/* BORDO INTERNO SOTTILE */}
              <div className="absolute inset-0 rounded-full border border-emerald-500/20"></div>

              <span className="text-3xl font-bold text-white">V</span>
            </div>

            {/* ORBITA */}
            <div className="absolute w-4 h-4 rounded-full
                            bg-gradient-to-br from-emerald-400 to-violet-500
                            animate-orbit">
            </div>

          </div>
        </div>
      </div>

      {/* PAYOFF */}
      <h1 className="text-5xl font-bold text-center leading-tight">
        VarIA
      </h1>

      <p className="text-xl text-gray-300 mt-3 text-center max-w-xl">
        Cognitive Automation Framework per processi chiari, governati e riproducibili.
      </p>

      {/* CTA */}
      <div className="mt-8 flex gap-4">

        <a
          href="https://github.com/varmenia/varia-cognitive-governance-layer
          "
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg font-semibold bg-black
                     border border-emerald-700
                     bg-gradient-to-br from-black via-black to-emerald-900/40
                     hover:border-emerald-400
                     hover:from-black hover:via-emerald-900/30 hover:to-emerald-700/40
                     transition-all duration-300">
          Esplora i Framework
        </a>

      

      </div>

      {/* VALUE PROPOSITION */}
      <section className="mt-24 max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-12">
          Perché VarIA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40 
                          hover:border-emerald-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">
              Governance Cognitiva
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Strutture chiare, logiche esplicite e processi governati.
              VarIA porta ordine, trasparenza e coerenza in ogni flusso operativo.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40
                          hover:border-violet-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-violet-300">
              Automazione Riproducibile
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni automazione è verificabile, tracciabile e replicabile.
              Niente magia: solo processi solidi, documentati e controllati.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40
                          hover:border-emerald-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">
              Architettura Modulare
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Un sistema costruito a blocchi, componibile e scalabile.
              Ogni modulo è indipendente, ma perfettamente integrato nel framework.
            </p>
          </div>

        </div>
      </section>

      {/* SEZIONE CGL */}
      <section className="mt-32 max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-6">
          CGL — Cognitive Governance Layer
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
          Il livello di governance che rende ogni processo chiaro, tracciabile e riproducibile.
          CGL è il cuore di VarIA: definisce le regole, struttura le decisioni e guida l'automazione.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40 
                          hover:border-emerald-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">
              Regole Esplicite
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni processo è definito da regole chiare e leggibili.
              Nessuna ambiguità, nessuna interpretazione nascosta.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40
                          hover:border-violet-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-violet-300">
              Decisioni Tracciabili
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni scelta è documentata e verificabile.
              Il sistema sa sempre perché ha fatto ciò che ha fatto.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40
                          hover:border-emerald-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">
              Governance Centrale
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Un unico livello di controllo che coordina moduli, automazioni e flussi.
              Stabilità al centro, dinamismo attorno.
            </p>
          </div>

        </div>
      </section>

      {/* SEZIONE CTC */}
      <section className="mt-32 max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-6">
          CTC — Cognitive Task Chain
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
          La catena operativa che esegue le regole definite dal CGL.
          Ogni task è un modulo autonomo, governato e verificabile.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40 
                          hover:border-violet-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-violet-300">
              Moduli Autonomi
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni task è indipendente, riutilizzabile e isolato.
              La catena si adatta senza rompere l'intero sistema.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40
                          hover:border-emerald-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-emerald-300">
              Flussi Governati
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni passaggio segue le regole del CGL.
              Nessuna esecuzione fuori controllo, nessuna ambiguità.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40
                          hover:border-violet-400/60 transition-all duration-300">
            <h3 className="text-2xl font-semibold mb-3 text-violet-300">
              Tracciabilità Totale
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Ogni task lascia una traccia chiara.
              Il sistema sa cosa è stato fatto, quando e perché.
            </p>
          </div>

        </div>
      </section>

      {/* SEZIONE COME FUNZIONA */}
      <section className="mt-32 max-w-5xl w-full">

        <h2 className="text-4xl font-bold text-center mb-6">
          Come Funziona VarIA
        </h2>

        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12 text-lg">
          Un sistema che parte dalla governance, attraversa la catena operativa
          e produce automazioni stabili, verificabili e coerenti.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* STEP 1 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40 
                          hover:border-emerald-400/60 transition-all duration-300 text-center">
            <div className="text-emerald-300 text-3xl font-bold mb-3">1</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-300">
              Governance
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Il CGL definisce regole, limiti e logiche.
              È il centro stabile del sistema.
            </p>
          </div>

          {/* STEP 2 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40 
                          hover:border-violet-400/60 transition-all duration-300 text-center">
            <div className="text-violet-300 text-3xl font-bold mb-3">2</div>
            <h3 className="text-xl font-semibold mb-2 text-violet-300">
              Task Chain
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Il CTC esegue le regole tramite moduli autonomi e tracciabili.
            </p>
          </div>

          {/* STEP 3 */}
          <div className="p-6 rounded-xl border border-emerald-700/40 bg-black/40 
                          hover:border-emerald-400/60 transition-all duration-300 text-center">
            <div className="text-emerald-300 text-3xl font-bold mb-3">3</div>
            <h3 className="text-xl font-semibold mb-2 text-emerald-300">
              Automazione
            </h3>
            <p className="text-gray-300 leading-relaxed">
              I moduli producono output coerenti, verificabili e riproducibili.
            </p>
          </div>

          {/* STEP 4 */}
          <div className="p-6 rounded-xl border border-violet-700/40 bg-black/40 
                          hover:border-violet-400/60 transition-all duration-300 text-center">
            <div className="text-violet-300 text-3xl font-bold mb-3">4</div>
            <h3 className="text-xl font-semibold mb-2 text-violet-300">
              Output Finale
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Il sistema genera risultati chiari, stabili e governati.
            </p>
          </div>

        </div>
      </section>

      {/* SEZIONE DEMO CHATBOT */}
      <section id="demo-chatbot" className="mt-24 max-w-5xl w-full">
        <h2 className="text-2xl font-semibold text-gray-100 mb-4">
          Demo Chatbot VarIA
        </h2>
        <p className="text-gray-400 mb-6">
          Prova il chatbot direttamente da qui.
        </p>

        <DemoChatbotCard />
      </section>

      {/* FOOTER */}
      <footer className="mt-32 w-full py-10 border-t border-gray-800 text-center text-gray-400">

        <p className="mb-4">
          © {new Date().getFullYear()} VarIA — Framework di Governance Cognitiva
        </p>

        <a
          href="https://www.linkedin.com/in/viviana-armenia"
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-300 hover:text-violet-400 transition-colors"
        >
          Il mio profilo LinkedIn
        </a>

      </footer>

    </main>
  );
}

function DemoChatbotCard() {
  const [messages, setMessages] = useState([
    {
      role: 'user',
      content: 'Puoi generare un flusso operativo per gestire richieste ripetitive?',
    },
    {
      role: 'assistant',
      content:
        'Certo.\nCGL: definisce regole e limiti.\nCTC: esegue i task in sequenza.\nOutput: flusso stabile e riproducibile.',
    },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: 'user', content: input.trim() },
    ];

    setMessages(newMessages);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: newMessages }),
    });

    const data = await res.json();

    setMessages([
      ...newMessages,
      { role: 'assistant', content: data.reply },
    ]);

    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-violet-900/40 border border-violet-800/60 rounded-2xl p-6 shadow-xl max-w-2xl">
      <div className="space-y-4 max-h-64 overflow-y-auto mb-4 pr-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={
              m.role === 'user'
                ? 'ml-auto max-w-[80%] rounded-xl bg-violet-700/70 px-4 py-2 text-sm text-gray-100'
                : 'mr-auto max-w-[80%] rounded-xl bg-emerald-700/70 px-4 py-2 text-sm text-gray-100 whitespace-pre-line'
            }
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="mr-auto max-w-[60%] rounded-xl bg-emerald-700/40 px-4 py-2 text-sm text-gray-200 italic">
            VarIA sta pensando…
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Scrivi un messaggio..."
          className="flex-1 rounded-lg bg-black/40 border border-gray-700 px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-violet-400"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 rounded-lg font-semibold bg-black
                     border border-violet-700
                     bg-gradient-to-br from-black via-black to-violet-900/40
                     hover:border-violet-400
                     hover:from-black hover:via-violet-900/30 hover:to-violet-700/40
                     text-gray-200 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? 'Invio…' : 'Invia'}
        </button>
      </form>
    </div>
  );
}
