/*!
 * <blink>again - 
 * Do you miss <blink> as much as I do? Yeah, I thought so.
 * https://github.com/wreckingadm/blinkagain
 *
 * Copyright 2015 BOXdev.com, wreckreation.org
 */

// https://en.wikipedia.org/wiki/Blink_element
setInterval( function()
{
   $( 'blink' ).each( function()
   {
      $( this ).css( 'visibility' , $( this ).css( 'visibility' ) === 'hidden' ? '' : 'hidden' )
   });
}, 1000);