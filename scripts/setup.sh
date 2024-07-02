#!/bin/bash

# Create a directory for types if it doesn't exist
mkdir -p types

# Create Volumes TypeScript file
cat <<EOT > types/volumes.d.ts
export interface VolumeInfo {
    title: string;
    authors?: string[];
    publisher?: string;
    publishedDate?: string;
    description?: string;
    industryIdentifiers?: IndustryIdentifier[];
    pageCount?: number;
    categories?: string[];
    averageRating?: number;
    ratingsCount?: number;
    imageLinks?: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
}

export interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}

export interface Volume {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
}

export interface VolumesResponse {
    kind: string;
    totalItems: number;
    items: Volume[];
}
EOT

# Create Bookshelves TypeScript file
cat <<EOT > types/bookshelves.d.ts
import { Volume } from './volumes';

export interface Bookshelf {
    kind: string;
    id: number;
    selfLink: string;
    title: string;
    description: string;
    volumeCount: number;
    volumesLastUpdated: string;
}

export interface BookshelvesResponse {
    kind: string;
    items: Bookshelf[];
}

export interface BookshelfVolumesResponse {
    kind: string;
    totalItems: number;
    items: Volume[];
}
EOT

# Create Annotations TypeScript file
cat <<EOT > types/annotations.d.ts
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
EOT

# Create Reading Positions TypeScript file
cat <<EOT > types/readingPositions.d.ts
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
EOT

echo "TypeScript type files created successfully."
