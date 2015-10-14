/*!
 * <blink>again - 
 * Do you miss <blink> as much as I do? Yeah, I thought so.
 * https://github.com/wreckingadm/blinkagain
 *
 * Copyright 2015 BOXdev.com, wreckreation.org
 */

var BlinkAgainProto = Object.create( HTMLElement.prototype );

Object.defineProperty( BlinkAgainProto, 'rate', { 
    value: 20,
    writable : true
});

Object.defineProperty( BlinkAgainProto, 'smooth', { 
    value: false,
    writable : true
});

var BlinkAgainElement = document.registerElement( 'blink-',  { 
    prototype: BlinkAgainProto
});

$( document ).ready( function()
{
   blink();
});

function blink() {
   setTimeout( function()
   {
      //TODO: toggle() won't work because it removes the DOM from the flow
      $( 'blink-' ).toggle();
      blink();
   }, 1000 );
}