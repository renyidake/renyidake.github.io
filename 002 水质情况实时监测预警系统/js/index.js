$(function(){

	map();

    leidatu();
    wuran();
    huaxing();
	zhexian();

    //大屏

	function leida1(){
	var myChart = echarts.init(document.getElementById('map'));


	myChart.setOption(option);
	window.addEventListener("resize",function(){
        myChart.resize();
    });

	}




})


function map(){
		var myChart = echarts.init(document.getElementById('map'));
		let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

		let data = [{
		        name: "重庆",
		        value: [106.54, 29.59]
		    },
		    {
		        name: "湖北",
		        value: [112.46, 31.2]
		    },

		    {
		        name: "浙江",
		        value: [120.344, 28.64]
		    },
		    {
		        name: "四川",
		        value: [103.93, 30.82]
		    },
			{
				name: "上海",
				value: [121.4648, 31.2891]
			},


		]
		let LableData = [
		    {
		    name: "重庆",
		    coords: [
		        [106.54, 29.59],
		        [109.3, 25.94]
		    ], // 线条位置[开始位置，结束位置]
		    value: [1299, 13522]
		},
		{
		    name: "湖北",
		    coords: [
		        [112.46, 31.2],
		        [114.31, 35.08, 100]
		    ], // 线条位置[开始位置，结束位置]
		    value: [1021, 9641]
		},
		{
		    name: "浙江",
		    coords: [
		        [120.344, 28.64],
		        [125.35, 27.26]
		    ], // 线条位置[开始位置，结束位置]
		    value: [599, 7858]
		},
		{
		    name: "四川",
		    coords: [
		        [103.93, 30.82],
		        [103.08, 33.2, 100]
		    ], // 线条位置[开始位置，结束位置]
		    value: [388, 2978]
		},
			{
				name: "上海",
				coords: [
					[121.4648, 31.2891],
					[125.62, 32.33]
				], // 线条位置[开始位置，结束位置]
				value: [67, 651]
			},
		];

		option = {
		    /*backgroundColor: '#000f1e',*/
		    geo: {
		        map: 'china',
		        aspectScale: 0.85,
		        layoutCenter: ["50%", "50%"], //地图位置
		        layoutSize: '100%',
		        itemStyle: {
		            normal: {
		                shadowColor: '#276fce',
		                shadowOffsetX: 0,
		                shadowOffsetY: 15,
		                opacity: 0.5,
		            },
		            emphasis: {
		                areaColor: '#276fce',

		            }
		        },
		        regions: [{
		            name: '南海诸岛',
		            itemStyle: {
		                areaColor: 'rgba(0, 10, 52, 1)',

		                borderColor: 'rgba(0, 10, 52, 1)',
		                normal: {
		                    opacity: 0,
		                    label: {
		                        show: false,
		                        color: "#009cc9",
		                    }
		                },


		            },
		            label: {
		                show: false,
		                color: '#FFFFFF',
		                fontSize: 12,
		            },


		        }],

		    },
		    series: [
		        // 常规地图
		        {
		            type: 'map',
		            mapType: 'china',
		            aspectScale: 0.85,
		            layoutCenter: ["50%", "50%"], //地图位置
		            layoutSize: '100%',
		            zoom: 1, //当前视角的缩放比例
		            // roam: true, //是否开启平游或缩放
		            scaleLimit: { //滚轮缩放的极限控制
		                min: 1,
		                max: 2
		            },
		            itemStyle: {
		                normal: {
		                    areaColor: '#0c274b',
		                    borderColor: '#1cccff',
		                    borderWidth: 1.5


		                },
		                emphasis: {
		                    areaColor: '#02102b',
		                    label: {
		                        color: "#fff"
		                    }

		                }
		            },


		        },
		        { //首都星图标
		            name: '首都',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            data: [{
		                name: '首都',
		                value: [116.40, 39.92, 100],

		            }, ],
		            symbol: iconRQ,
		            symbolSize: 20,
		            label: {
		                normal: {
		                    show: false,

		                },
		                emphasis: {
		                    show: false
		                }
		            },

		        },
		        // 区域散点图
		        {
		            type: 'effectScatter',
		            coordinateSystem: 'geo',
		            zlevel: 2,
		            symbolSize: 10,
		            rippleEffect: { //坐标点动画
		                period: 3,
		                scale: 5,
		                brushType: 'fill'
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'right',
		                    formatter: '{b}',
		                    color: '#b3e2f2',
		                    fontWeight: "bold",
		                    fontSize: 16
		                }
		            },

		            data: data,
		            itemStyle: { //坐标点颜色
		                normal: {
		                    show: true,
		                    color: '#ff8003',
		                    shadowBlur: 20,
		                    shadowColor: '#fff'
		                },
		                emphasis: {
		                    areaColor: '#f00'
		                }
		            },

		        },


		         /*{
		            name: 'lable',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbol: 'pin',
		            symbolSize: [50,50],
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 9,
		                    },
		                    formatter (value){
		                        return value.data.value[1]
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#D8BC37', //标志颜色
		                }
		            },
		            data: data,
		            showEffectOn: 'render',
		            rippleEffect: {
		                brushType: 'stroke'
		            },
		            hoverAnimation: true,
		            zlevel: 1
		        },*/
		        {

		            type: 'lines',
		            zlevel: 3,
		            symbol: 'circle',
		            symbolSize: [5, 5],
		            color: '#ff8003',
		            opacity: 1,
		            label: {
		                show: true,
		                padding: [10, 20],
		                color: '#fff',
		                backgroundColor: "#1a3961",
		                borderColor: '#aee9fb',
		                borderWidth: 1,
		                borderRadius: 6,
		                formatter(params) {

		                    let arr = [params.name, "专利数量：" + params.value[1] + "件", "申请主体：" + params.value[0] + "家"];
		                    return arr.join("\n")
		                },
		                textStyle: {
		                    align: 'left',
		                    lineHeight: 20,
		                }
		                /* normal: {

		                     textStyle: {
		                         color: '#fff',
		                         fontSize: 9,
		                     },
		                     formatter (value){
		                         return value.data.value[2]
		                     },

		                 }*/
		            },
		            lineStyle: {
		                type: 'solid',
		                color: '#fff',
		                width: 0.5,
		                opacity: 1,

		            },
		            data: LableData,


		        },
		    ]
		};

		myChart.on('click', function(params) {
		    console.log(params);
		});
		myChart.setOption(option);
		window.addEventListener("resize",function(){
	        myChart.resize();
	    });

	}


function leidatu(){
	// var imgPath = ['http://bmob-cdn-15355.b0.upaiyun.com/2017/12/01/bee4341c4089af7980b87074a77479ad.png']
	var myChart = echarts.init(document.getElementById('leida'));
	option = {

	    color: ['#00c2ff', '#f9cf67', '#e92b77'],
	    legend: {
	        show: true,
	        // icon: 'circle',//图例形状
	        bottom: 0,
	        center: 0,
	        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
	        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
	        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
	        textStyle: {
	            fontSize: 12,
	            color: '#ade3ff'
	        },
	        data: ['2020', '2021', '2022'],
	    },
	    radar: [{

	        indicator: [{
	                text: '重庆',
	                max: 2063
	            },
	            {
	                text: '湖北',
	                max: 1776
	            },
	            {
	                text: '浙江',
	                max: 1510
	            },
	            {
	                text: '四川',
	                max: 573
	            },
	            {
	                text: '上海',
	                max: 255
	            }
	        ],

	        textStyle: {
	            color: 'red'
	        },
	        center: ['50%', '50%'],
	        radius: 60,
	        startAngle: 90,
	        splitNumber: 3,
	        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
	        // shape: 'circle',
	        // backgroundColor: {
	        //     image:imgPath[0]
	        // },
	        name: {
	            formatter: '{value}',
	            textStyle: {
	                fontSize: 12, //外圈标签字体大小
	                color: '#5b81cb' //外圈标签字体颜色
	            }
	        },
	        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
	            show: true,
	            areaStyle: { // 分隔区域的样式设置。
	                color: ['#141c42', '#141c42'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
	            }
	        },
	        // axisLabel:{//展示刻度
	        //     show: true
	        // },
	        axisLine: { //指向外圈文本的分隔线样式
	            lineStyle: {
	                color: '#153269'
	            }
	        },
	        splitLine: {
	            lineStyle: {
	                color: '#113865', // 分隔线颜色
	                width: 1, // 分隔线线宽
	            }
	        }
	    }, ],
	    series: [{
	        name: '雷达图',
	        type: 'radar',
	        itemStyle: {
	            emphasis: {
	                lineStyle: {
	                    width: 4
	                }
	            }
	        },
	        data: [{
	            name: '2020',
	            value: [1345, 1776, 896, 544, 74],
	            areaStyle: {
	                normal: { // 单项区域填充样式
	                    color: {
	                        type: 'linear',
	                        x: 0, //右
	                        y: 0, //下
	                        x2: 1, //左
	                        y2: 1, //上
	                        colorStops: [{
	                            offset: 0,
	                            color: '#00c2ff'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: '#00c2ff'
	                        }],
	                        globalCoord: false
	                    },
	                    opacity: 1 // 区域透明度
	                }
	            },
	            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
	             label: {                    // 单个拐点文本的样式设置
	                    normal: {
	                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
	                        position: 'top',        // 标签的位置。[ default: top ]
	                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
	                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
	                        fontSize: 14,           // 文字的字体大小
	                        formatter:function(params) {
	                            return params.value;
	                        }
	                    }
	                },
	            itemStyle: {
	                normal: { //图形悬浮效果
	                    borderColor: '#00c2ff',
	                    borderWidth: 2.5
	                }
	            },
	            // lineStyle: {
	            //     normal: {
	            //         opacity: 0.5// 图形透明度
	            //     }
	            // }
	        }, {
	            name: '2021',
	            value: [1272, 1523, 741, 573, 97],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#f9cf67',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
	                normal: { // 单项区域填充样式
	                    color: {
	                        type: 'linear',
	                        x: 0, //右
	                        y: 0, //下
	                        x2: 1, //左
	                        y2: 1, //上
	                        colorStops: [{
	                            offset: 0,
	                            color: '#f9cf67'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: '#f9cf67'
	                        }],
	                        globalCoord: false
	                    },
	                    opacity: 1 // 区域透明度
	                }
	            },
	            // lineStyle: {
	            //     normal: {
	            //         opacity: 0.5// 图形透明度
	            //     }
	            // }
	        }, {
	            name: '2022',
	            value: [997, 1749, 934, 449, 255],
	            symbolSize: 2.5,
	            itemStyle: {
	                normal: {
	                    borderColor: '#e92b77',
	                    borderWidth: 2.5,
	                }
	            },
	            areaStyle: {
	                normal: { // 单项区域填充样式
	                    color: {
	                        type: 'linear',
	                        x: 0, //右
	                        y: 0, //下
	                        x2: 1, //左
	                        y2: 1, //上
	                        colorStops: [{
	                            offset: 0,
	                            color: '#e92b77'
	                        }, {
	                            offset: 0.5,
	                            color: 'rgba(0,0,0,0)'
	                        }, {
	                            offset: 1,
	                            color: '#e92b77'
	                        }],
	                        globalCoord: false
	                    },
	                    opacity: 1 // 区域透明度
	                }
	            }
	        }]
	    }, ]
	};


	myChart.setOption(option);
}

function wuran(){

	var myChart = echarts.init(document.getElementById('wuran'));
	var salvProName =["国家电网"," 重庆建工集团","重庆建工住宅建设","中国建筑第八工程局","四川长虹空调"];
	var salvProValue =[548,454,399,392,296];
	var salvProMax =[];//背景按最大值
	for (let i = 0; i < salvProValue.length; i++) {
	    salvProMax.push(salvProValue[0])
	}
	option = {

	    grid: {
	        left: '2%',
	        right: '2%',
	        bottom: '-6%',
	        top: '8%',
	        containLabel: true
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'none'
	        },
	        formatter: function(params) {
	            return params[0].name  + ' : ' + params[0].value
	        }
	    },
	    xAxis: {
	        show: false,
	        type: 'value'
	    },
	    yAxis: [{
	        type: 'category',
	        inverse: true,
	        axisLabel: {
	            show: true,
	            textStyle: {
	                color: '#fff'
	            },
	        },
	        splitLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLine: {
	            show: false
	        },
	        data: salvProName
	    }, {
	        type: 'category',
	        inverse: true,
	        axisTick: 'none',
	        axisLine: 'none',
	        show: true,
	        axisLabel: {
	            textStyle: {
	                color: '#ffffff',
	                fontSize: '12'
	            },
	        },
	        data:salvProValue
	    }],
	    series: [{
	            name: '值',
	            type: 'bar',
	            zlevel: 1,
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
	                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                        offset: 0,
	                        color: 'rgb(57,89,255,1)'
	                    }, {
	                        offset: 1,
	                        color: 'rgb(46,200,207,1)'
	                    }]),
	                },
	            },
	            barWidth: 10,
	            data: salvProValue
	        },
	        {
	            name: '背景',
	            type: 'bar',
	            barWidth: 10,
	            barGap: '-100%',
	            data: salvProMax,
	            itemStyle: {
	                normal: {
	                    color: 'rgba(24,31,68,1)',
	                    barBorderRadius: 30,
	                }
	            },
	        },
	    ]
	};

	myChart.setOption(option);


}

function huaxing(){
	var myChart = echarts.init(document.getElementById('huaxing'));

	var dataStyle = {
	    normal: {
	        label: {
	            show: false
	        },
	        labelLine: {
	            show: false
	        },
	        shadowBlur: 0,
	        shadowColor: '#203665'
	    }
	};
	option = {

	    series: [{
	        name: '第一个圆环',
	        type: 'pie',
	        clockWise: false,
	        radius: [45, 55],
	        itemStyle: dataStyle,
	        hoverAnimation: false,
	        center: ['15%', '50%'],
	        data: [{
	            value: 20835,
	            label: {
	                normal: {
	                    rich: {
	                        a: {
	                            color: '#3a7ad5',
	                            align: 'center',
	                            fontSize: 14,
	                            fontWeight: "bold"
	                        },
	                        b: {
	                            color: '#fff',
	                            align: 'center',
	                            fontSize: 12
	                        }
	                    },
	                    formatter: function(params){
	                        return "{b|有效专利}\n\n"+"{a|"+params.value+"件}"+"\n\n{b|57.34%}";
	                    },
	                    position: 'center',
	                    show: true,
	                    textStyle: {
	                        fontSize: '12',
	                        fontWeight: 'normal',
	                        color: '#fff'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#2c6cc4',
	                    shadowColor: '#2c6cc4',
	                    shadowBlur: 0
	                }
	            }
	        }, {
	            value: 36336,
	            name: 'invisible',
	            itemStyle: {
	                normal: {
	                    color: '#24375c'
	                },
	                emphasis: {
	                    color: '#24375c'
	                }
	            }
	        }]
	    }, {
	        name: '第二个圆环',
	        type: 'pie',
	        clockWise: false,
	        radius: [45, 55],
	        itemStyle: dataStyle,
	        hoverAnimation: false,
	        center: ['50%', '50%'],
	        data: [{
	            value: 12880,
	            label: {
	                normal: {
	                    rich: {
	                        a: {
	                            color: '#d03e93',
	                            align: 'center',
	                            fontSize: 14,
	                            fontWeight: "bold"
	                        },
	                        b: {
	                            color: '#fff',
	                            align: 'center',
	                            fontSize: 12
	                        }
	                    },
	                    formatter: function(params){
	                        return "{b|失效专利}\n\n"+"{a|"+params.value+"件}"+"\n\n{b|35.45%}";
	                    },
	                    position: 'center',
	                    show: true,
	                    textStyle: {
	                        fontSize: '12',
	                        fontWeight: 'normal',
	                        color: '#fff'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#ef45ac',
	                    shadowColor: '#ef45ac',
	                    shadowBlur: 0
	                }
	            }
	        }, {
	            value: 36336,
	            name: 'invisible',
	            itemStyle: {
	                normal: {
	                    color: '#412a4e'
	                },
	                emphasis: {
	                    color: '#412a4e'
	                }
	            }
	        }]
	    }, {
	        name: '第三个圆环',
	        type: 'pie',
	        clockWise: false,
	        radius: [45, 55],
	        itemStyle: dataStyle,
	        hoverAnimation: false,
	        center: ['85%', '50%'],
	        data: [{
	            value: 2621,
	            label: {
	                normal: {
	                    rich: {
	                        a: {
	                            color: '#603dd0',
	                            align: 'center',
	                            fontSize: 14,
	                            fontWeight: "bold"
	                        },
	                        b: {
	                            color: '#fff',
	                            align: 'center',
	                            fontSize: 12
	                        }
	                    },
	                    formatter: function(params){
	                        return "{b|审中专利}\n\n"+"{a|"+params.value+"件}"+"\n\n{b|7.22%}";
	                    },
	                    position: 'center',
	                    show: true,
	                    textStyle: {
	                        fontSize: '12',
	                        fontWeight: 'normal',
	                        color: '#fff'
	                    }
	                }
	            },
	            itemStyle: {
	                normal: {
	                    color: '#613fd1',
	                    shadowColor: '#613fd1',
	                    shadowBlur: 0
	                }
	            }
	        }, {
	            value: 36336,
	            name: 'invisible',
	            itemStyle: {
	                normal: {
	                    color: '#453284'
	                },
	                emphasis: {
	                    color: '#453284'
	                }
	            }
	        }]
	    }]
	}

	myChart.setOption(option);


}


function zhexian() {
	var myChart = echarts.init(document.getElementById('zhexian'));

	dataText = [{
		name: '重庆',
		type: 'line',
		smooth: true,
		symbolSize: 8,
		data: [427,1704,1025, 2063, 1066, 1187, 1345, 1272,997,482],
		barWidth: '30%',
		itemStyle: {
			normal: {
				color: '#f0c725'
			}
		}
	}, {
		name: '湖北',
		type: 'line',
		smooth: true,
		symbolSize: 8,
		data: [0,22,418,599,1275,1472,1776,1523,1749,807],
		barWidth: '30%',
		itemStyle: {
			normal: {
				color: '#16f892'
			}
		}
	},
		{
			name: '浙江',
			type: 'line',
			smooth: true,
			symbolSize: 8,
			data: [1,358,1510,804,1260,1029,896,741,934,324],
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#0BE3FF'
				}
			}
		}
	]
	dataObj = {
		year: ['2014','2015', '2016', '2017', '2018', '2019', '2020','2021','2022','2023'],
		data: {
			value: [{
				name: '重庆',
				value: [427,1704,1025, 2063, 1066, 1187, 1345, 1272,997,482]
			}, {
				name: '湖北',
				value: [0,22,418,599,1275,1472,1776,1523,1749,807]
			}, {
				name: '浙江',
				value: [1,358,1510,804,1260,1029,896,741,934,324]
			}]
		}
	}
	let dataArr = []

	dataObj.data.value.map(item => {
		let datachild = []
		let newArr = {
			name: item.name,
			type: 'line',
			smooth: true,
			symbolSize: 8,
			data: item.value,
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: item.name === '重庆' ? '#f0c725' : item.name === '浙江' ? '#0BE3FF' : '#16f892'
				}
			}
		}

		dataArr.push(newArr)
	})
	option = {
		color: ['#f0c725', '#16f892'],
		title: {
			left: 'center',
			text: '',
			textStyle: {
				color: '#FFFFFF',
				fontSize: '14',
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend: {
			x: 'center',
			top: '25',
			textStyle: {
				color: '#c1cadf',
				"fontSize": 14
			}
		},
		grid: {
			left: '6%',
			right: '10%',
			top: '25%',
			bottom: '3%',
			containLabel: true
		},
		toolbox: {
			show: true,
			orient: 'vertical',
			x: 'right',
			y: 'center'
		},
		xAxis: [{
			type: 'category',
			name: '年份',
			boundaryGap: true, 
			data: dataObj.year,
			axisLine: {
				lineStyle: {
					color: 'rgba(240,199,37,0.5)'
				}
			},
			axisLabel: {
				interval: 0,
				color: '#c1cadf',
				fontSize: '12',
				rotate: 25  // 将标签旋转为 25 度角度
			}
		}],
		yAxis: [{
			type: 'value',
			name: '',
			nameTextStyle: {
				color: '#c1cadf',
				align: 'right',
				lineHeight: 10
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(240,199,37,0.5)'
				}
			},
			axisLabel: {
				interval: 0,
				color: '#c1cadf',
				fontSize: '12'
			},
			splitLine: {
				show: false
			}
		}],
		series: dataArr
	};
    //大屏
	/*var myChart = echarts.init(document.getElementById('channel_handle_detail'));
    myChart.clear();
    if(data.handleTimeData.length>0){
        myChart.setOption(option);
    }else{
        noDataTip($("#channel_handle_detail"));
    }*/
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	window.addEventListener("resize",function(){
		myChart.resize();
	});
}
