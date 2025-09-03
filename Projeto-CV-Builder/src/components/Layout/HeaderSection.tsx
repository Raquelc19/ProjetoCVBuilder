function HeaderSection() {
  return (
    <>
      <section className="w-full flex justify-between items-center px-10 pt-1 mt-3">
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-bold text-purple-900">Gerador de currículos IA</h1>
          <p className="text-sm text-gray-600">Gerador de currículos inteligentes</p>
        </div>

        <div className="flex items-center gap-6">
          <input
            type="text"
            placeholder="Cole sua API key"
            className="px-4 py-2 border border-gray-300 rounded-full outline-none transition-all 
                       focus:border-purple-600 focus:shadow-md hover:border-purple-600 placeholder-purple-900 text-black"
          />
          <button
            className="px-5 py-2 rounded-full border border-purple-600 bg-[#6F7DF3ff] text-white 
                       hover:bg-purple-700 hover: transition-all"
          >
            Exportar PDF
          </button>
        </div>
      </section>

      <div className="w-full h-0.5 bg-purple-900 "></div>
    </>
  );
}

export default HeaderSection;
