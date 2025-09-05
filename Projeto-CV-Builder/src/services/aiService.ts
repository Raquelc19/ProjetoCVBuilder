export async function upgradeResume(resume: string, apiKey: string): Promise<string> {
    if(!apiKey) {
        throw new Error("API Key não encontrada");
    }

    const prompt = `Melhore o seguinte resumo profissional, mantendo a ideia original, mas deixando mais atrativo, claro e profissional. 
    Não acrescente informações novas, apenas reescreva de forma melhorada.
    
    ${resume}`;

    try {
        const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
        },
        //o stringify foi usado nessa parte do nosso projeto para transformar esses dados js em formato json
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [{ role: "user", content: prompt}],
            max_tokens: 500,
        }),
        });

        if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(`Erro na API: ${res.status} - ${errorData.error?.message || 'Erro desconhecido'}`);
        }
        const data = await res.json();
        return data.choices?.[0]?.message?.content?.trim() || resume;
    } catch(error) {
        console.error("Erro ao se comunicar com OpenAI:", error);
        throw new Error("Falha na comunicação com o serviço");
    }
    
}