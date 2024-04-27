import { createContext, use } from 'react';

export const ActivePathContext = createContext('ROOT');

export function useActivePathID() {
    return use(ActivePathContext);
}