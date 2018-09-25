/* actions */

module.exports = {
  
  FILTER: 'FILTER',
  
  SUBMIT: 'SUBMIT',
  
  TOGGLETIME: 'TOGGLETIME',
  
  INCTIME: 'INCTIME',
  
  DECTIME: 'DECTIME',

  filter: function() {
    return {
      type: this.FILTER
    }
  },
  
  submit: function() {
    return {
      type: this.SUBMIT
    }
  },
  
  toggletime: function () {
    return {
      type: this.TOGGLETIME
    }
  },
  
  inctime: function() {
    return {
      type: this.INCTIME
    }
  },
  
  dectime: function() {
    return {
      type: this.DECTIME
    }
  }
  
}
