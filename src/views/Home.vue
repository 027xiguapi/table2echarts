<template>
    <div class="home">
        <multipane class="custom-resizer" layout="vertical">
        <div class="pane" :style="{ width: '50%', maxWidth: '95%' }">
            <Table></Table>
        </div>
        <multipane-resizer></multipane-resizer>
        <div class="pane" :style="{ flexGrow: 1 }">
            <Echarts></Echarts>
        </div>
        </multipane>
    </div>
</template>

<script>
import Table from '@/components/Table';
import Echarts from '@/components/Echarts';
import { Multipane, MultipaneResizer } from 'vue-multipane';
export default {
  name: 'home',
  components: {
    Table,
    Echarts,
    Multipane,
    MultipaneResizer,
  },
};
</script>

<style lang="scss" scoped>
.custom-resizer {
  width: 100%;
  height: calc( 100vh - 16px );
}
.custom-resizer > .pane {
  text-align: left;
  padding: 15px;
  overflow: hidden;
  background: #eee;
  border: 1px solid #ccc;
}
.custom-resizer > .multipane-resizer {
  margin: 0; left: 0;
  position: relative;
  &:before {
    display: block;
    content: "";
    width: 3px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -1.5px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
  &:hover {
    &:before {
      border-color: #999;
    }
  }
}
</style>
