declare const _default: {
    make: (value: string) => Promise<string>;
    check: (value: string, hash: string) => Promise<boolean>;
    makeSync: (value: string) => string;
    checkSync: (value: string, hash: string) => boolean;
};
export default _default;
