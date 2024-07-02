import React from "react";
import Skeleton from "react-loading-skeleton";

export default function BooksSkeleton() {
    return (
        <div className="w-[200px] space-y-5 p-4">
            <Skeleton className="h-24 rounded-lg bg-default-300" />
            <div className="space-y-3">
                <Skeleton className="h-24 rounded-lg bg-default-300" />
            </div>
        </div>
    );
}
