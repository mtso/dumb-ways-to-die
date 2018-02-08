function Brand(name) {
  this.name = name;
}

function FooObj(val) {
  this.meaningOfLife = 42;
  this.message = "hello";
  this.brand = new Brand("toyeng");
  this.snack = val;
}

const fo = new FooObj(Math.floor( Math.random() * 10 ));

(function bite() {
  fo.snack += 1;
  setTimeout(bite, 500);
})();
