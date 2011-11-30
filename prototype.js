/*

Comp()
.var('x').let(2)
.do(console.log);

*/

function Comp(v) {
    this.value = v || 0;
    
    this.do = function(fun) {
        fun(this.value);
        return this;
    }
    this.set = function(v) {
        this.value = v;
        return this;
    }
    
    return this;
}

Comp(10)
.do(console.log)
.set(2)
.do(console.log);


function CompF(f) {
    this.comp = f || function() { return 0; };
    
    this.do = function(fun) {
        currentComp = this.comp();
        this.comp = function() { return fun(currentComp); };
        return this;
    };
    this.set = function(v) {
        this.comp = function() { return v; };
        return this;
    };
    this.bind = function(f) {
        return f(this);
    };
    this.run = function() {
        return this.comp();
    };
    
    return this;
}

CompF()
.set(2)
.do(console.log)
.run();



function CompP() {
    this.comp = [];
    
    this.do = function(fun) {
        currentComp = this.comp();
        this.comp = function() { return fun(currentComp); };
        return this;
    };
    this.set = function(v) {
        this.comp = function() { return v; };
        return this;
    };
    this.bind = function(f) {
        return f(this);
    };
    this.let = function(o) {
        return this;
    };
    this.run = function() {
        return this.comp();
    };
    
    return this;
}

CompP()
.set(2)
.let({
    x: console.log,
    y: console.log
})
.do(console.log)
.run();





var k = {
    a: [1,2,3]
}

function CC() {
    this.vars = {};
    
    this.let = function(ass) {
        for(var varName in ass)
            console.log(varName);
    }
    
    return this;
}

CC()
.let({a:1});