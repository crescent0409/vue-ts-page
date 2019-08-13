<template>
    <div>
    <Button type="button" class="center-block btn-block btn btn-primary btn-lg"
            @click="cancel">取消
    </Button>
    <Button type="button" class="center-block btn-block btn btn-primary btn-lg"
            @click="handleOk">确 定
    </Button>
    </div>
</template>

<script lang="ts">
    import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg: string;

        @Emit("handleOk")
        async handleOk() {
            const res: any = await this.axios.post("/get", {
                article_id: "11111",
            });
            console.log(res.data);

        }

        @Emit("cancel")
        async cancel() {
            const res: any = await this.axios.get("/get");
            console.log(res.data);

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
