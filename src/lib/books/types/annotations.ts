export interface Annotation {
    kind: string;
    id: string;
    selfLink: string;
    volumeId: string;
    highlightedContent: string;
    note: string;
    created: string;
    updated: string;
}

export interface AnnotationsResponse {
    kind: string;
    items: Annotation[];
}
