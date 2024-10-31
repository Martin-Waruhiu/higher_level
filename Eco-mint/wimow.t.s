interface Window {
  ethereum?: {
    isMetaMask?: boolean;
    request?: (...args: any[]) => Promise<any>;
    send: (method: string, params: any[]) => Promise<any>;
    on?: (...args: any[]) => void;
    removeListener?: (...args: any[]) => void;
    selectedAddress?: string;
    networkVersion?: string;
  };
}
