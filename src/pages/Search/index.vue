<template>
    <div>
        <!-- ----{{$route.params.keyword}}
        <br/>
        ----{{keyword}}
        <br/>
        ----{{name}} -->

        <!-- params参数:{{$route.params.keyword}}  ---- {{keyword}}
        query参数:{{$route.query.keyword2}} ---- {{keyword2}} -->

        <TypeNav></TypeNav>
    </div>
</template>

<script>
export default {
    name:"Search",
    // props:['keyword','name']
    // props:['keyword','keyword2']
}
</script>

<style lang="less" scoped>
    
</style>