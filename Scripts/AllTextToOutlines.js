function outlineDocText(  ) {  
  
          if ( app.documents.length == 0 ) return;  
    
  var docRef = app.activeDocument;  
    
          recurseLayers( docRef.layers );  
    
};  
  
outlineDocText();   
  
function recurseLayers( objArray ) {  
    
          for ( var i = 0; i < objArray.length; i++ ) {  
    
                    // Record previous value with conditional change  
                    var l = objArray[i].locked;  
                    if ( l ) objArray[i].locked = false;  
    
                    // Record previous value with conditional change  
                    var v = objArray[i].visible;  
                    if ( !v ) objArray[i].visible = true;  
    
                    outlineText( objArray[i].textFrames );  
    
                    // Recurse the contained layer collection  
                    if ( objArray[i].layers.length > 0 ) {  
                              recurseLayers( objArray[i].layers )  
                    }  
    
                    // Recurse the contained group collection  
                    if ( objArray[i].groupItems.length > 0 ) {  
                              recurseGroups( objArray[i].groupItems )  
                    }   
    
                    // Return to previous values  
                    objArray[i].locked = l;  
                    objArray[i].visible = v;  
          }  
};  
  
function recurseGroups( objArray ) {  
    
          for ( var i = 0; i < objArray.length; i++ ) {  
    
                    // Record previous value with conditional change  
                    var l = objArray[i].locked;  
                    if ( l ) objArray[i].locked = false;  
    
                    // Record previous value with conditional change  
                    var h = objArray[i].hidden;  
                    if ( h ) objArray[i].hidden = false;  
    
                    outlineText( objArray[i].textFrames );  
    
                    // Recurse the contained group collection  
                    if ( objArray[i].groupItems.length > 0 ) {  
                              recurseGroups( objArray[i].groupItems )  
                    }   
    
                    // Return to previous values  
                    objArray[i].locked = l;  
                    objArray[i].hidden = h;  
          }  
};  
  
  
function outlineText( objArray ) {  
    
          // Reverse this loop as it brakes the indexing  
          for ( var i = objArray.length-1; i >= 0; i-- ) {  
    
                    // Record previous value with conditional change  
                    var l = objArray[i].locked;  
                    if ( l ) objArray[i].locked = false;  
    
                    // Record previous value with conditional change  
                    var h = objArray[i].hidden;  
                    if ( h ) objArray[i].hidden = false;  
    
                    var g = objArray[i].createOutline(  );  
    
                    // Return new group to previous Text Frame values  
                    g.locked = l;  
                    g.hidden = h;  
    
          }  
  
};  