export interface ReadingPosition {
    kind: string;
    volumeId: string;
    position: string;
    updated: string;
    epubCfiPosition?: string;
    pdfPosition?: string;
}

export interface ReadingPositionResponse {
    kind: string;
    item: ReadingPosition;
}
