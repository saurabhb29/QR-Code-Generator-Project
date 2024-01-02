import { LightningElement } from 'lwc';

export default class QRCodeGenerator extends LightningElement {
    
    inputValue = '';
    showQRCode      = false;
    url        = 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=';
    qrCodeImageUrl    = '';

    inputChange(event) {
        this.inputValue = event.target.value;

        
    }

    letterHandler() {
        this.showQRCode      = true;
        this.qrCodeImageUrl    = this.url + this.inputValue;

    }
}