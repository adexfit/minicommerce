"use client";

import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { QueryClient } from "@tanstack/react-query";
import { persistQueryClient } from "@tanstack/react-query-persist-client";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 1000 * 60 * 60 * 24, // 24 hours
        },
    },
});

if (typeof window !== "undefined") {
    const localStoragePersister = createAsyncStoragePersister({
        storage: window.localStorage,
        key: "REACT_QUERY_OFFLINE_CACHE",
    });

    persistQueryClient({
        queryClient,
        persister: localStoragePersister,
        buster: "v1",
        dehydrateOptions: {
            shouldDehydrateQuery: () => true,
        },
    });
}

export default queryClient;
