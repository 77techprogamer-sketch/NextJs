export const contactConfig = {
    phone: "9986634506",
    phoneFull: "+91-9986634506",
    whatsapp: "919986634506",
    whatsappMsg: "Hi Insurance Support, I have a question about my policy.",
    get whatsappUrl() {
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(this.whatsappMsg)}`;
    },
    getDialUrl(number?: string) {
        return `tel:${number || this.phone}`;
    }
};
