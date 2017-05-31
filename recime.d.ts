declare class NLP {
    // extract entities for a given text using the configured nlp provider.
    extract(text) : Promise<any>;
}

declare var apiai : NLP;
