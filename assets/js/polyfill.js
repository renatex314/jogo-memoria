Array.prototype.removeAtIndex = function(index){
    return this.splice(index, 1)[0];
}

Array.prototype.clone = function(){
    return [...this];
}