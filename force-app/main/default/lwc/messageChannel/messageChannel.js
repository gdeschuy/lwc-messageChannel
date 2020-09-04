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
import { publish, subscribe, MessageContext } from 'lightning/messageService';
import LwcMessage from '@salesforce/messageChannel/sampleMessage__c';

export default class messageChannel extends LightningElement {
    @api subscription;

    // Subscribe to message channel
    @wire(MessageContext)
    messageContext; 

    connectedCallback(){
        this.subscription = subscribe(
            this.messageContext,
            LwcMessage, (message) => {
                this.subscription = JSON.stringify(message);
            }
        );
    }

    // Publish on message channel
    handleClick(){
        const payload = {
            message: 'Test message'
        };
        publish(this.messageContext, LwcMessage, payload);
    }; 
}