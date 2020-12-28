// 柱状图模块1
$(() => {
	//1实例化对象
	let myChart = echarts.init(document.querySelector(".bar .chart"));

	//请求数据
	var obj = {
		data: [200, 330, 500, 900, 1500, 1200, 600],
	}
	//2指定配置项和数据
	var option = {
		color: ['#3398DB'],
		//表格title
		title: {
			text: "柱形图-就业行业",
			left: 'center',
			top: 10,
			textStyle: {
				color: '#fff',
				fontSize: 14
			},
		},
		//提示框行为
		tooltip: {
			//激活鼠标浮动
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		//修改图标的大小
		grid: {
			top: "17%",
			left: "0",
			right: "3%",
			bottom: "0",
			containLabel: true
		},
		//横坐标数据
		xAxis: [{
			type: "category",
			data: [
				"旅游行业",
				"教育培训",
				"游戏行业",
				"医疗行业",
				"电商行业",
				"社交行业",
				"金融行业"
			],
			axisTick: {
				alignWithLabel: true
			},
			// 修改刻度标签 相关样式
			axisLabel: {
				interArrival: 0,
				color: "rgba(255,255,255,.6) ",
				fontSize: "12"
			},
			// 不显示x坐标轴的样式
			axisLine: {
				show: false
			}
		}],
		yAxis: [{
			name: "销量",
			//表格刻度值范围
			min: 0, //坐标最小值
			max: Math.max.apply(null, obj.data), //坐标最大值
			interval: 300, //设置y轴的间隔
			splitLine: {
				show: true,
				lineStyle: {
					color: ["yellow"],
				}
			}, //是否去除网格线
			splitArea: {
				show: false
			}, //是否保留网格区域
			type: "value",
			// 修改刻度标签 相关样式
			axisLabel: {
				color: "rgba(255,255,255,.6) ",
				fontSize: 12,
			},
			// y轴的线条改为了 2像素
			axisLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)",
					width: 2
				}
			},
			// y轴分割线的颜色
			splitLine: {
				lineStyle: {
					color: "rgba(255,255,255,.1)"
				}
			}
		}],
		//鼠标画上去的显示效果
		series: [{
			name: "直接访问",
			type: "bar",
			//柱子的宽度
			barWidth: "40%",
			//显示的数据
			data: obj.data,
			itemStyle: {
				// 修改柱子圆角
				barBorderRadius: 3
			}
		}]
	}
	setOptions(myChart, option)
})
// 柱状图2
$(() => {
	//获取数据
	var yearData = [{
			year: "2020", // 年份
			data: [
				// 两个数组是因为有两条线
				[24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
				[40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
			]
		},
		{
			year: "2021", // 年份
			data: [
				// 两个数组是因为有两条线
				[123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
				[143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
			]
		}
	];
	//1实例化对象
	let myChart = echarts.init(document.querySelector(".bar2 .chart"));
	//2.配置和数据
	let option = {
		// 通过这个color修改两条线的颜色
		color: ["#00f2f1", "#ed3f35"],
		//表格title
		title: {
			text: "折线图-人员变化 2020  2021",
			left: 'center',
			top: 10,
			bottom: 10,
			textStyle: {
				color: '#fff',
				fontSize: 14
			},
		},
		tooltip: {
			trigger: "axis"
		},
		grid: {
			top: "17%",
			left: "3%",
			right: "4%",
			bottom: "0",
			show: true, // 显示边框
			borderColor: "#012f4a", // 边框颜色
			containLabel: true // 包含刻度文字在内
		},
		xAxis: {
			type: "category",
			boundaryGap: false,
			data: [
				"1月",
				"2月",
				"3月",
				"4月",
				"5月",
				"6月",
				"7月",
				"8月",
				"9月",
				"10月",
				"11月",
				"12月"
			],
			axisTick: {
				show: false //去除刻度线
			},
			axisLabel: {
				color: "#4c9bfd", // 文本颜色
				fontSize: 12,
			},
			axisLine: {
				show: false // 去除轴线
			}


		},
		yAxis: {
			type: "value",
			name: "销量",
			//表格刻度值范围
			min: 0, //坐标最小值
			max: Math.max.apply(null, yearData[0].data[1]), //坐标最大值
			interval: 50, //设置y轴的间隔
			nameTextStyle: {
				color: '#fff',
				fontSize: 12
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			axisLine: {
				show: false // 去除轴线
			},
			axisTick: {
				show: false //去除刻度线
			},
			splitLine: {
				lineStyle: {
					color: "#012f4a" // 分割线颜色
				}
			}
		},
		series: [{
				name: "新增粉丝",
				type: "line",
				// true 可以让我们的折线显示带有弧度
				smooth: true,
				data: yearData[1].data[0]
			},
			{
				name: "新增游客",
				type: "line",
				smooth: true,
				//数据
				data: yearData[0].data[1]
			}
		]
	};
	setOptions(myChart, option)
})
// 饼形图1
$(() => {
	let myChart = echarts.init(document.querySelector(".pie .chart"));
	let option = {
		//表格title
		title: {
			text: "饼形图-年龄分布",
			left: 'center',
			top: 10,
			textStyle: {
				color: '#fff',
				fontSize: 14
			},
		},
		color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
		tooltip: {
			trigger: "item",
			formatter: "{a} <br/>{b}: {c} ({d}%)"
		},
		legend: {
			bottom: "0",
			// 修改小图标的大小
			itemWidth: 10,
			itemHeight: 10,
			// 修改图例组件的文字为 12px
			textStyle: {
				color: "rgba(255,255,255,.5)",
				fontSize: "12"
			}
		},
		series: [{
			name: '年龄分布',
			type: 'pie',
			// 这个radius可以修改饼形图的大小
			// radius 第一个值是内圆的半径 第二个值是外圆的半径
			radius: ["40%", "60%"],
			//设置图形的位置
			center: ['50%', '50%'],
			avoidLabelOverlap: false,
			// 图形上的文字
			label: {
				show: false,
				position: "center"
			},
			// 链接文字和图形的线是否显示
			labelLine: {
				show: true
			},
			data: [{
					value: 1,
					name: "0岁以下"
				},
				{
					value: 4,
					name: "20-29岁"
				},
				{
					value: 2,
					name: "30-39岁"
				},
				{
					value: 2,
					name: "40-49岁"
				},
				{
					value: 1,
					name: "50岁以上"
				}
			]
		}]
	}
	setOptions(myChart, option)
})
//播放视频
$(() => {
	var myVideo = document.getElementById("video");
	const $mv = $(".mv");
	const $button = $("#button");
	const $playwrap = $(".play-wrap");
	$mv.mouseenter(function(event) {
		$playwrap.show()
	})
	$mv.mouseleave(function(event) {
		$playwrap.hide()
	})
	$button.on('click', () => {
		if (myVideo.paused) {
			myVideo.play()
			$playwrap.hide()
			$button.text("暂停")
			console.log(1)
		} else {
			myVideo.pause();
			console.log(2)
			$button.text("播放")
		}
	})
})
//
$(() => {
	const myChart = echarts.init(document.querySelector(".bar4 .chart"));
	const option = {
		baseOption: {
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'cross',
					crossStyle: {
						color: '#999'
					}
				}
			},
			toolbox: {
				feature: {
					dataView: {
						show: true,
						readOnly: false
					},
					magicType: {
						show: true,
						type: ['line', 'bar']
					},
					restore: {
						show: true
					},
					saveAsImage: {
						show: true
					}
				}
			},
			grid: {
				top: "17%",
				left: "2%",
				right: "3%",
				bottom: "0",
				show: true, // 显示边框
				borderColor: "#012f4a", // 边框颜色
				containLabel: true // 包含刻度文字在内
			},
			legend: {
				data: ['蒸发量', '降水量', '平均温度'],
			},
			xAxis: [{
				type: 'category',
				data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
				axisPointer: {
					type: 'shadow'
				},
				//出去刻度线
				axisTick: {
					show: false
				},
				axisLabel: {
					color: "#4c9bfd" // 文本颜色
				},

			}],
			yAxis: [{
					type: 'value',
					name: '水量',
					min: 0,
					max: 250,
					interval: 50,
					axisLabel: {
						formatter: '{value} ml'
					},
					nameTextStyle: {
						color: '#fff',
						fontSize: 12
					},
					axisLabel: {
						color: "#4c9bfd" // 文本颜色
					},
					//出去刻度线
					axisTick: {
						show: false
					},
					splitLine: {
						lineStyle: {
							color: "#012f4a" // 分割线颜色
						}
					},

				},
				{
					type: 'value',
					name: '温度',
					min: 0,
					max: 25,
					interval: 5,
					axisLabel: {
						formatter: '{value} °C'
					},
					nameTextStyle: {
						color: '#fff',
						fontSize: 12
					},
					//出去刻度线
					axisTick: {
						show: false
					},
					axisLabel: {
						color: "#4c9bfd" // 文本颜色
					},
					splitLine: {
						lineStyle: {
							color: "#012f4a" // 分割线颜色
						}
					}
				},

			],
			series: [{
					name: '蒸发量',
					type: 'bar',
					data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
				},
				{
					name: '降水量',
					type: 'bar',
					data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
					textStyle: {
						color: '#4c9bfd',
						fontSize: 14
					},
				},
				{
					name: '平均温度',
					type: 'line',
					yAxisIndex: 1,
					data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
				}
			]
		}
	}
	setOptions(myChart, option)
})

//城市气温
$(() => {
	var myChart = echarts.init(document.querySelector(".bar5 .chart"));
	//城市数据
	var dataBJ = [
		[1, 55, 9, 56, 0.46, 18, 6, "良"],
		[2, 25, 11, 21, 0.65, 34, 9, "优"],
		[3, 56, 7, 63, 0.3, 14, 5, "良"],
		[4, 33, 7, 29, 0.33, 16, 6, "优"],
		[5, 42, 24, 44, 0.76, 40, 16, "优"],
		[6, 82, 58, 90, 1.77, 68, 33, "良"],
		[7, 74, 49, 77, 1.46, 48, 27, "良"],
		[8, 78, 55, 80, 1.29, 59, 29, "良"],
		[9, 267, 216, 280, 4.8, 108, 64, "重度污染"],
		[10, 185, 127, 216, 2.52, 61, 27, "中度污染"],
		[11, 39, 19, 38, 0.57, 31, 15, "优"],
		[12, 41, 11, 40, 0.43, 21, 7, "优"],
		[13, 64, 38, 74, 1.04, 46, 22, "良"],
		[14, 108, 79, 120, 1.7, 75, 41, "轻度污染"],
		[15, 108, 63, 116, 1.48, 44, 26, "轻度污染"],
		[16, 33, 6, 29, 0.34, 13, 5, "优"],
		[17, 94, 66, 110, 1.54, 62, 31, "良"],
		[18, 186, 142, 192, 3.88, 93, 79, "中度污染"],
		[19, 57, 31, 54, 0.96, 32, 14, "良"],
		[20, 22, 8, 17, 0.48, 23, 10, "优"],
		[21, 39, 15, 36, 0.61, 29, 13, "优"],
		[22, 94, 69, 114, 2.08, 73, 39, "良"],
		[23, 99, 73, 110, 2.43, 76, 48, "良"],
		[24, 31, 12, 30, 0.5, 32, 16, "优"],
		[25, 42, 27, 43, 1, 53, 22, "优"],
		[26, 154, 117, 157, 3.05, 92, 58, "中度污染"],
		[27, 234, 185, 230, 4.09, 123, 69, "重度污染"],
		[28, 160, 120, 186, 2.77, 91, 50, "中度污染"],
		[29, 134, 96, 165, 2.76, 83, 41, "轻度污染"],
		[30, 52, 24, 60, 1.03, 50, 21, "良"],
		[31, 46, 5, 49, 0.28, 10, 6, "优"]
	];

	var dataGZ = [
		[1, 26, 37, 27, 1.163, 27, 13, "优"],
		[2, 85, 62, 71, 1.195, 60, 8, "良"],
		[3, 78, 38, 74, 1.363, 37, 7, "良"],
		[4, 21, 21, 36, 0.634, 40, 9, "优"],
		[5, 41, 42, 46, 0.915, 81, 13, "优"],
		[6, 56, 52, 69, 1.067, 92, 16, "良"],
		[7, 64, 30, 28, 0.924, 51, 2, "良"],
		[8, 55, 48, 74, 1.236, 75, 26, "良"],
		[9, 76, 85, 113, 1.237, 114, 27, "良"],
		[10, 91, 81, 104, 1.041, 56, 40, "良"],
		[11, 84, 39, 60, 0.964, 25, 11, "良"],
		[12, 64, 51, 101, 0.862, 58, 23, "良"],
		[13, 70, 69, 120, 1.198, 65, 36, "良"],
		[14, 77, 105, 178, 2.549, 64, 16, "良"],
		[15, 109, 68, 87, 0.996, 74, 29, "轻度污染"],
		[16, 73, 68, 97, 0.905, 51, 34, "良"],
		[17, 54, 27, 47, 0.592, 53, 12, "良"],
		[18, 51, 61, 97, 0.811, 65, 19, "良"],
		[19, 91, 71, 121, 1.374, 43, 18, "良"],
		[20, 73, 102, 182, 2.787, 44, 19, "良"],
		[21, 73, 50, 76, 0.717, 31, 20, "良"],
		[22, 84, 94, 140, 2.238, 68, 18, "良"],
		[23, 93, 77, 104, 1.165, 53, 7, "良"],
		[24, 99, 130, 227, 3.97, 55, 15, "良"],
		[25, 146, 84, 139, 1.094, 40, 17, "轻度污染"],
		[26, 113, 108, 137, 1.481, 48, 15, "轻度污染"],
		[27, 81, 48, 62, 1.619, 26, 3, "良"],
		[28, 56, 48, 68, 1.336, 37, 9, "良"],
		[29, 82, 92, 174, 3.29, 0, 13, "良"],
		[30, 106, 116, 188, 3.628, 101, 16, "轻度污染"],
		[31, 118, 50, 0, 1.383, 76, 11, "轻度污染"]
	];

	var dataSH = [
		[1, 91, 45, 125, 0.82, 34, 23, "良"],
		[2, 65, 27, 78, 0.86, 45, 29, "良"],
		[3, 83, 60, 84, 1.09, 73, 27, "良"],
		[4, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
		[5, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
		[6, 109, 81, 121, 1.28, 68, 51, "轻度污染"],
		[7, 106, 77, 114, 1.07, 55, 51, "轻度污染"],
		[8, 89, 65, 78, 0.86, 51, 26, "良"],
		[9, 53, 33, 47, 0.64, 50, 17, "良"],
		[10, 80, 55, 80, 1.01, 75, 24, "良"],
		[11, 117, 81, 124, 1.03, 45, 24, "轻度污染"],
		[12, 99, 71, 142, 1.1, 62, 42, "良"],
		[13, 95, 69, 130, 1.28, 74, 50, "良"],
		[14, 116, 87, 131, 1.47, 84, 40, "轻度污染"],
		[15, 108, 80, 121, 1.3, 85, 37, "轻度污染"],
		[16, 134, 83, 167, 1.16, 57, 43, "轻度污染"],
		[17, 79, 43, 107, 1.05, 59, 37, "良"],
		[18, 71, 46, 89, 0.86, 64, 25, "良"],
		[19, 97, 71, 113, 1.17, 88, 31, "良"],
		[20, 84, 57, 91, 0.85, 55, 31, "良"],
		[21, 87, 63, 101, 0.9, 56, 41, "良"],
		[22, 104, 77, 119, 1.09, 73, 48, "轻度污染"],
		[23, 87, 62, 100, 1, 72, 28, "良"],
		[24, 168, 128, 172, 1.49, 97, 56, "中度污染"],
		[25, 65, 45, 51, 0.74, 39, 17, "良"],
		[26, 39, 24, 38, 0.61, 47, 17, "优"],
		[27, 39, 24, 39, 0.59, 50, 19, "优"],
		[28, 93, 68, 96, 1.05, 79, 29, "良"],
		[29, 188, 143, 197, 1.66, 99, 51, "中度污染"],
		[30, 174, 131, 174, 1.55, 108, 50, "中度污染"],
		[31, 187, 143, 201, 1.39, 89, 53, "中度污染"]
	];

	var schema = [{
			name: 'date',
			index: 0,
			text: '日'
		},
		{
			name: 'AQIindex',
			index: 1,
			text: 'AQI指数'
		},
		{
			name: 'PM25',
			index: 2,
			text: 'PM2.5'
		},
		{
			name: 'PM10',
			index: 3,
			text: 'PM10'
		},
		{
			name: 'CO',
			index: 4,
			text: '一氧化碳（CO）'
		},
		{
			name: 'NO2',
			index: 5,
			text: '二氧化氮（NO2）'
		},
		{
			name: 'SO2',
			index: 6,
			text: '二氧化硫（SO2）'
		}
	];
	var itemStyle = {
		opacity: 0.8,
		shadowBlur: 10,
		shadowOffsetX: 0,
		shadowOffsetY: 0,
		shadowColor: 'rgba(0, 0, 0, 0.5)'
	};

	var option = {
		grid: {
			left: '10%',
			right: 150,
			top: '18%',
			bottom: '10%'
		},
		tooltip: {
			padding: 10,
			backgroundColor: '#222',
			borderColor: '#777',
			borderWidth: 1,
			formatter: function(obj) {
				var value = obj.value;
				return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">' +
					obj.seriesName + ' ' + value[0] + '日：' +
					value[7] +
					'</div>' +
					schema[1].text + '：' + value[1] + '<br>' +
					schema[2].text + '：' + value[2] + '<br>' +
					schema[3].text + '：' + value[3] + '<br>' +
					schema[4].text + '：' + value[4] + '<br>' +
					schema[5].text + '：' + value[5] + '<br>' +
					schema[6].text + '：' + value[6] + '<br>';
			}
		},
		xAxis: {
			type: 'value',
			name: '日期',
			nameGap: 16,
			//改变X轴字体属性
			nameTextStyle: {
				color: '#fff',
				fontSize: 12
			},
			max: 31,
			splitLine: {
				show: false
			},
			//X坐标属性
			axisLine: {
				// lineStyle: {
				// 	color: '#eee'
				// }
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			//出去刻度线
			axisTick: {
				show: false
			},
		},
		yAxis: {
			type: 'value',
			name: 'AQI指数',
			nameLocation: 'end',
			nameGap: 20,
			nameTextStyle: {
				color: '#fff',
				fontSize: 12
			},
			//y坐标属性
			axisLine: {
				//y坐标属性
				// lineStyle: {
				// 	color: '#eee'
				// }
			},
			axisLabel: {
				color: "#4c9bfd" // 文本颜色
			},
			//出去刻度线
			axisTick: {
				show: false
			},
			splitLine: {
				lineStyle: {
					color: "#012f4a" // 分割线颜色
				}
			}
		},
		 visualMap: [
		        {
		            left: 'right',
		            top: '0%',
		            dimension: 2,
		            min: 0,
		            max: 250,
		            itemWidth: 30,
		            itemHeight: 50,
		            calculable: true,
		            precision: 0.1,
		            text: ['圆形大小：PM2.5'],
		            textGap: 30,
		            textStyle: {
		                color: '#fff'
		            },
		            inRange: {
		                symbolSize: [10, 70]
		            },
		            outOfRange: {
		                symbolSize: [10, 70],
		                color: ['rgba(255,255,255,.2)']
		            },
		            controller: {
		                inRange: {
		                    color: ['#c23531']
		                },
		                outOfRange: {
		                    color: ['#444']
		                }
		            }
		        },
		        {
		            left: 'right',
		            bottom: '5%',
		            dimension: 6,
		            min: 0,
		            max: 150,
		            itemHeight: 70,
		
		            precision: 0.1,
		            text: ['明暗：二氧化硫'],
		            textGap: 30,
		            textStyle: {
		                color: '#4c9bfd'
		            },
		            inRange: {
		                colorLightness: [1, 0.5]
		            },
		            outOfRange: {
		                color: ['rgba(255,255,255,.2)']
		            },
		            controller: {
		                inRange: {
		                    color: ['#c23531']
		                },
		                outOfRange: {
		                    color: ['#444']
		                }
		            }
		        }
		    ],
		series: [
		        {
		            name: '北京',
		            type: 'scatter',
		            itemStyle: itemStyle,
		            data: dataBJ
		        },
		        {
		            name: '上海',
		            type: 'scatter',
		            itemStyle: itemStyle,
		            data: dataSH
		        },
		        {
		            name: '广州',
		            type: 'scatter',
		            itemStyle: itemStyle,
		            data: dataGZ
		        }
		    ]
	}
  setOptions(myChart, option)
})
//地图
$(() => {
	const myChart = echarts.init(document.querySelector(".Map .chart"));
	var geoCoordMap = {
		上海: [121.4648, 31.2891],
		东莞: [113.8953, 22.901],
		东营: [118.7073, 37.5513],
		中山: [113.4229, 22.478],
		临汾: [111.4783, 36.1615],
		临沂: [118.3118, 35.2936],
		丹东: [124.541, 40.4242],
		丽水: [119.5642, 28.1854],
		乌鲁木齐: [87.9236, 43.5883],
		佛山: [112.8955, 23.1097],
		保定: [115.0488, 39.0948],
		兰州: [103.5901, 36.3043],
		包头: [110.3467, 41.4899],
		北京: [116.4551, 40.2539],
		北海: [109.314, 21.6211],
		南京: [118.8062, 31.9208],
		南宁: [108.479, 23.1152],
		南昌: [116.0046, 28.6633],
		南通: [121.1023, 32.1625],
		厦门: [118.1689, 24.6478],
		台州: [121.1353, 28.6688],
		合肥: [117.29, 32.0581],
		呼和浩特: [111.4124, 40.4901],
		咸阳: [108.4131, 34.8706],
		哈尔滨: [127.9688, 45.368],
		唐山: [118.4766, 39.6826],
		嘉兴: [120.9155, 30.6354],
		大同: [113.7854, 39.8035],
		大连: [122.2229, 39.4409],
		天津: [117.4219, 39.4189],
		太原: [112.3352, 37.9413],
		威海: [121.9482, 37.1393],
		宁波: [121.5967, 29.6466],
		宝鸡: [107.1826, 34.3433],
		宿迁: [118.5535, 33.7775],
		常州: [119.4543, 31.5582],
		广州: [113.5107, 23.2196],
		廊坊: [116.521, 39.0509],
		延安: [109.1052, 36.4252],
		张家口: [115.1477, 40.8527],
		徐州: [117.5208, 34.3268],
		德州: [116.6858, 37.2107],
		惠州: [114.6204, 23.1647],
		成都: [103.9526, 30.7617],
		扬州: [119.4653, 32.8162],
		承德: [117.5757, 41.4075],
		拉萨: [91.1865, 30.1465],
		无锡: [120.3442, 31.5527],
		日照: [119.2786, 35.5023],
		昆明: [102.9199, 25.4663],
		杭州: [119.5313, 29.8773],
		枣庄: [117.323, 34.8926],
		柳州: [109.3799, 24.9774],
		株洲: [113.5327, 27.0319],
		武汉: [114.3896, 30.6628],
		汕头: [117.1692, 23.3405],
		江门: [112.6318, 22.1484],
		沈阳: [123.1238, 42.1216],
		沧州: [116.8286, 38.2104],
		河源: [114.917, 23.9722],
		泉州: [118.3228, 25.1147],
		泰安: [117.0264, 36.0516],
		泰州: [120.0586, 32.5525],
		济南: [117.1582, 36.8701],
		济宁: [116.8286, 35.3375],
		海口: [110.3893, 19.8516],
		淄博: [118.0371, 36.6064],
		淮安: [118.927, 33.4039],
		深圳: [114.5435, 22.5439],
		清远: [112.9175, 24.3292],
		温州: [120.498, 27.8119],
		渭南: [109.7864, 35.0299],
		湖州: [119.8608, 30.7782],
		湘潭: [112.5439, 27.7075],
		滨州: [117.8174, 37.4963],
		潍坊: [119.0918, 36.524],
		烟台: [120.7397, 37.5128],
		玉溪: [101.9312, 23.8898],
		珠海: [113.7305, 22.1155],
		盐城: [120.2234, 33.5577],
		盘锦: [121.9482, 41.0449],
		石家庄: [114.4995, 38.1006],
		福州: [119.4543, 25.9222],
		秦皇岛: [119.2126, 40.0232],
		绍兴: [120.564, 29.7565],
		聊城: [115.9167, 36.4032],
		肇庆: [112.1265, 23.5822],
		舟山: [122.2559, 30.2234],
		苏州: [120.6519, 31.3989],
		莱芜: [117.6526, 36.2714],
		菏泽: [115.6201, 35.2057],
		营口: [122.4316, 40.4297],
		葫芦岛: [120.1575, 40.578],
		衡水: [115.8838, 37.7161],
		衢州: [118.6853, 28.8666],
		西宁: [101.4038, 36.8207],
		西安: [109.1162, 34.2004],
		贵阳: [106.6992, 26.7682],
		连云港: [119.1248, 34.552],
		邢台: [114.8071, 37.2821],
		邯郸: [114.4775, 36.535],
		郑州: [113.4668, 34.6234],
		鄂尔多斯: [108.9734, 39.2487],
		重庆: [107.7539, 30.1904],
		金华: [120.0037, 29.1028],
		铜川: [109.0393, 35.1947],
		银川: [106.3586, 38.1775],
		镇江: [119.4763, 31.9702],
		长春: [125.8154, 44.2584],
		长沙: [113.0823, 28.2568],
		长治: [112.8625, 36.4746],
		阳泉: [113.4778, 38.0951],
		青岛: [120.4651, 36.3373],
		韶关: [113.7964, 24.7028]
	}
	var XAData = [
		[{
			name: "西安"
		}, {
			name: "拉萨",
			value: 100
		}],
		[{
			name: "西安"
		}, {
			name: "上海",
			value: 100
		}],
		[{
			name: "西安"
		}, {
			name: "广州",
			value: 100
		}],
		[{
			name: "西安"
		}, {
			name: "西宁",
			value: 100
		}],
		[{
			name: "西安"
		}, {
			name: "银川",
			value: 100
		}]
	];

	var XNData = [
		[{
			name: "西宁"
		}, {
			name: "北京",
			value: 100
		}],
		[{
			name: "西宁"
		}, {
			name: "上海",
			value: 100
		}],
		[{
			name: "西宁"
		}, {
			name: "广州",
			value: 100
		}],
		[{
			name: "西宁"
		}, {
			name: "西安",
			value: 100
		}],
		[{
			name: "西宁"
		}, {
			name: "银川",
			value: 100
		}]
	];

	var YCData = [
		[{
			name: "拉萨"
		}, {
			name: "潍坊",
			value: 100
		}],
		[{
			name: "拉萨"
		}, {
			name: "哈尔滨",
			value: 100
		}],
		[{
			name: "银川"
		}, {
			name: "上海",
			value: 100
		}],
		[{
			name: "银川"
		}, {
			name: "西安",
			value: 100
		}],
		[{
			name: "银川"
		}, {
			name: "西宁",
			value: 100
		}]
	];
	var planePath =
		"path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
	var convertData = function(data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var dataItem = data[i];
			var fromCoord = geoCoordMap[dataItem[0].name];
			var toCoord = geoCoordMap[dataItem[1].name];
			if (fromCoord && toCoord) {
				res.push({
					fromName: dataItem[0].name,
					toName: dataItem[1].name,
					coords: [fromCoord, toCoord],
					value: dataItem[1].value
				});
			}
		}
		return res;
	};


	var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色	
	var series = [];
	[
		["西安", XAData],
		["西宁", XNData],
		["银川", YCData]
	].forEach((item, i) => {
		series.push({
			name: item[0] + "Top" + i,
			type: "lines",
			zlevel: 1,
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: "red", //arrow箭头的颜色
				symbolSize: 3
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 0,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + " Top" + i,
			type: "lines",
			zlevel: 2,
			symbol: ["none", "arrow"],
			symbolSize: 10,
			effect: {
				show: true,
				period: 6,
				trailLength: 0,
				symbol: planePath,
				symbolSize: 15
			},
			lineStyle: {
				normal: {
					color: color[i],
					width: 1,
					opacity: 0.6,
					curveness: 0.2
				}
			},
			data: convertData(item[1])
		}, {
			name: item[0] + "Top" + i,
			type: "effectScatter",
			coordinateSystem: "geo",
			zlevel: 2,
			rippleEffect: {
				brushType: "stroke"
			},
			label: {
				normal: {
					show: true,
					position: "right",
					formatter: "{b}"
				}
			},
			symbolSize: function(val) {
				return val[2] / 8;
			},
			itemStyle: {
				normal: {
					color: color[i]
				},
				emphasis: {
					areaColor: "#2B91B7"
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[1].name,
					value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
				};
			})
		});
	});


	var option = {
		tooltip: {
			trigger: "item",
			formatter: function(params, ticket, callback) {
				if (params.seriesType == "effectScatter") {
					return "线路：" + params.data.name + "" + params.data.value[2];
				} else if (params.seriesType == "lines") {
					return (
						params.data.fromName +
						">" +
						params.data.toName +
						"<br />" +
						params.data.value
					);
				} else {
					return params.name;
				}
			}
		},
		legend: {
			orient: "vertical",
			top: "bottom",
			left: "right",
			data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
			textStyle: {
				color: "#fff"
			},
			selectedMode: "multiple"
		},
		geo: {
			map: "china",
			label: {
				emphasis: {
					show: true,
					color: "#fff"
				}
			},
			// 把中国地图放大了1.2倍
			zoom: 1.2,
			roam: true,
			itemStyle: {
				normal: {
					// 地图省份的背景颜色
					areaColor: "rgba(20, 41, 87,0.6)",
					borderColor: "#195BB9",
					borderWidth: 1
				},
				emphasis: {
					areaColor: "#2B91B7"
				}
			}
		},
		series: series
	};
	setOptions(myChart, option)
})




















//公共方法
function setOptions(myChart, option) {
	//3.把配置给实例对象
	myChart.setOption(option)
	// 4. 让图表跟随屏幕自动的去适应
	window.addEventListener("resize", function() {
		myChart.resize();
	});
}


//设置屏幕的高
$(() => {
	const $bodyBlock = $(".Echarts-wrap");
	const $content = $(".content");
	const $header = $(".header");
	const height = $(window).height();
	const width = $(window).width();
	const setbodyBlockHeight = () => {
		$bodyBlock.css({
			"max-width": width,
			"min-height": height,
		})
		$content.css({
			"height": height - 30 + "px",
			"width": width
		})
	}
	$bodyBlock.on('load', setbodyBlockHeight)
	setbodyBlockHeight()
})

//换屏方法
function Fun() {
	const $Map = $(".Map");
	const $Move = $(".Move");
	var time = null;
	time = setTimeout(function() {
		$Map.hide()
		$Move.show()
	}, 5000)

}
// Fun()
