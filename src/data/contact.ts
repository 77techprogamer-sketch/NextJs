export const contactConfig = {
    phone: "9986634506",
    phoneFull: "+91-9986634506",
    whatsapp: "919986634506",
    email: "contact@insurancesupport.online",
    whatsappMsg: "Hi Insurance Support team, I need help with a question about my policy.",
    get whatsappUrl() {
        return this.getWhatsappUrl(this.whatsappMsg);
    },
    getWhatsappUrl(message?: string) {
        return `https://wa.me/${this.whatsapp}?text=${encodeURIComponent(message || this.whatsappMsg)}`;
    },
    getDialUrl(number?: string) {
        return `tel:${number || this.phone}`;
    }
};
