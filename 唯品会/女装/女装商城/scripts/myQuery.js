function myQuery(){

}
myQuery.prototype = {
    $ : function (selector) {  
        if(arguments.length > 1){
            throw new Error("当前参数为： " + arguments.length + "个,但是函数要求必须为1个参数."); 
        }
        if(selector.length > 0){
            var firstChar = selector.substr(0,1);// [#|.|tag]
            var lastString = selector.substr(1);
            switch(firstChar){
                case "#":
                    return document.getElementById(lastString);
                case ".":
                    return document.getElementsByClassName(lastString);
                default:
                    document.getElementsByTagName(selector);
            }
        }        
    }
}

var $$ = new myQuery();