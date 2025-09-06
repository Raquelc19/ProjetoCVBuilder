import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import type { usePdfExportReturn } from "../types/cv.types";

const usePdfExport = (): usePdfExportReturn => {
    const contentDocument = useRef<HTMLDivElement>(null);
    const handleExport = useReactToPrint({
        contentRef: contentDocument,
        documentTitle: 'Curriculo',
        onAfterPrint: () => console.log("PDF gerado com sucesso!"),
    });

    return {
        //nesse momento essa propriedade exportar pdf está sendo criada
        exportarPdf: handleExport,
        contentDocument: contentDocument
    };
}

export default usePdfExport