define(
  [
    'components/flight/lib/component'
  ],

  function (defineComponent) {
    var helloButton = function () {
        this.defaultAttrs({
            buttonClass : 'btn',
            message : 'Hello,world!',
            text : 'Hello!!'
        });

        this.after('initialize',function () {
            this.$node
                .addClass(this.attr.buttonClass)
                .text(this.attr.text);
            this.on('click', function (e) {
                this.trigger('textChanged',{message: this.attr.message});
            });
        });
    }
    return defineComponent(helloButton);
  }
