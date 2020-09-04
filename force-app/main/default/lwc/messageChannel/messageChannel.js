/**
 * @description       : Sends a lightning message
 * @author            : Glenn Deschuymer
 * @group             : LWC
 * @last modified on  : 04-09-2020
 * @last modified by  : Glenn Deschuymer
 * Modifications Log 
 * Ver   Date         Author             Modification
 * 1.0   04-09-2020   Glenn Deschuymer   Initial Version
**/

import { LightningElement, api, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import LwcMessage from '@salesforce/messageChannel/ComCatMessageChannel__c';

export default class ComplianceCatalystContainer extends LightningElement {
    subscription = null;

    connectedCallback(){
        this.subscription = subscribe(
            this.messageContext,
            LwcMessage, (message) => {
                this.subscription = message;
            }
        );
        console.log('Record has been set to: '+JSON.stringify(this.subscription));
    };

    @wire(MessageContext)
    messageContext; 
}