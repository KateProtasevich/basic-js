const chainMaker = {
  body: [],
  getLength() {
  return this.body.length;
  },
  addLink(value) {
    if (value === undefined) {
        this.body.push('( )');
    } else {
      this.body.push(`( ${value} )`);
      return this;
    }
  },
  removeLink(position) {
 if (!(Number.isInteger(position) & position > 0 & position <= this.body.length)) {
this.body = [];
throw Error;
} else {
  this.body.splice(position-1,1);
}
return this;
  },
  reverseChain() {
this.body.reverse();
return this;
  },
  finishChain() {
    let newArr = [...this.body];
        this.body = [];
     return newArr.join('~~');

  }
};

module.exports = chainMaker;
