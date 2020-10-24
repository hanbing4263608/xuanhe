<template>
	<div id="bdmap">
		 <baidu-map class="map" :center="map.center" :zoom="map.zoom" @ready="handler">
            <!--缩放-->
            <bm-navigation anchor="BMAP_ANCHOR_TOP_LEFT"></bm-navigation>
            <!--定位-->
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <!--点-->
            <bm-marker :position="map.center" :dragging="map.dragging" animation="BMAP_ANIMATION_DROP">
                <!--提示信息-->
                <bm-info-window :show="map.show">煊赫欢迎您！</bm-info-window>
            </bm-marker>
        </baidu-map>
	</div>
</template>

<script>
	export default {
		name: "bdmap",
		data: () => ({
            map:{
                center: {lng: 116.36998, lat: 39.764838},
                zoom: 20,
                show: true,
                dragging: true
            },
        }),
        methods: {
            handler ({BMap, map}) {
                let me = this;
                console.log(BMap, map)
                // 鼠标缩放
                map.enableScrollWheelZoom(true);
                // 点击事件获取经纬度
                map.addEventListener('click', function (e) {
                    console.log(e.point.lng, e.point.lat)
                })
            }
		},
		mounted() {
		}
	}
</script>

<style lang="scss" scoped>
	#bdmap>>> {
		.map {
		        width: 100%;
		        height: 7.8rem;
		    }
	}
</style>
