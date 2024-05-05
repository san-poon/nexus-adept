import { Dispatch, createContext, use, useReducer } from 'react';

export const ActivePathContext = createContext('ROOT');
export const ActivePathDispatchContext = createContext((() => { }) as Dispatch<ActivePathAction>)

export function useActivePathID() {
    return use(ActivePathContext);
}
export function useActivePathDispatch() {
    return use(ActivePathDispatchContext);
}

export function ActivePathProvider({ children }: { children: React.ReactNode }) {
    const [activePathID, dispatch] = useReducer(activePathReducer, 'ROOT')
    return (
        <ActivePathContext.Provider value={activePathID}>
            <ActivePathDispatchContext.Provider value={dispatch}>
                {children}
            </ActivePathDispatchContext.Provider>
        </ActivePathContext.Provider>
    )
}

type ActivePathAction = { type: 'changed_active_path'; nextActivePathID: string }

function activePathReducer(pathID: string, action: ActivePathAction) {
    switch (action.type) {
        case 'changed_active_path': {
            const { nextActivePathID } = action;
            return nextActivePathID;
        }
        default: {
            throw Error(`Unknown action: ${action.type}`);
        }
    }
}