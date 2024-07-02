import { Suspense } from "react";
import BooksSkeleton from "~/components/pages/BooksSkeleton";
import SearchPage from "~/components/pages/search";
import 'react-loading-skeleton/dist/skeleton.css'

export default function Search({
    searchParams,
}: {
    searchParams?: {
        q?: string;
    };
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between">
            <Suspense fallback={<BooksSkeleton />}>
                <SearchPage q={searchParams?.q} />
            </Suspense>
        </div>
    );
}
