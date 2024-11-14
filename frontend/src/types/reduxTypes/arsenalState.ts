import ArsenalResponse from "../modelTypes/ArsenalResponse";

interface ArsenalState {
    arsenal: ArsenalResponse | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

export default ArsenalState