import { LightningElement } from 'lwc';

export default class QRCodeGenerator extends LightningElement {
    
    inputValue = '';
    showQRCode      = false;
    url        = 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=';
    qrCodeImageUrl    = '';

    inputChange(event) {
        this.inputValue = event.target.value;
        // Check if input value is blank
        if (!this.inputValue.trim()) {
            this.showQRCode = false;
        }

        
    }

    letterHandler() {
        // this.showQRCode      = true;
        // this.qrCodeImageUrl    = this.url + this.inputValue;
        if (this.inputValue.trim() !== '') {
            this.showQRCode = true;
            this.qrCodeImageUrl = this.url + this.inputValue;
        } else {
            this.showQRCode = false;
        }

    }
}