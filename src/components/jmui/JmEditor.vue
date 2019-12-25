<template>
    <div>
        <textarea id="code" ref="code" name="code">
            function findSequence(goal) {
              function find(start, history) {
                if (start == goal)
                  return history;
                else if (start > goal)
                  return null;
                else
                  return find(start + 5, "(" + history + " + 5)") ||
                         find(start * 3, "(" + history + " * 3)");
              }
              return find(1, "1");
}</textarea>
    </div>
</template>

<script>
    // require component
    import CodeMirror from 'codemirror'
    // component
    export default {
        name:'JmEditor',
        created() {
            let self = this;
            // this.$nextTick(function () {
            //     let myCodeMirror = CodeMirror.fromTextArea(self.$refs.edit);
            //     window.console.log(myCodeMirror);
            // })
            window.console.log(self.$refs.code);
            CodeMirror.fromTextArea(self.$refs.code, {
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true
            });
        
        }
    }
</script>

<style>
   
</style>
