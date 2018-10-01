

$.get('./MOGEO.json', function (MOJson) {
    echarts.registerMap('missouri', MOJson); // 注册地图
    var mapChart = echarts.init(document.getElementById('main'));

    var option = {
        title: {
            text: 'Domestic Violence Shelter Funding, Locations and Incidents',
            subtext: 'Year Ended December 31, 2017',
            subtext: "MCADSV and Missouri State Highway Patrol data",
            sublink: "http://www.census.gov/popest/data/datasets.html",
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            showDelay: 0,
            transitionDuration: 0.2,
            formatter: function (params) {
                return params.seriesName + '<br/>' + params.name + ':' + params.value;
            }
        },
        visualMap: {
            left: 'right',
            min: 0,
            max: 5000,
            inRange: {
                color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
            },
            text:['High','Low'],           // 文本，默认为数值文本
            calculable: true
        },
        toolbox: {
            show: true,
            //orient: 'vertical',
            left: 'left',
            top: 'top',
            feature: {
                dataView: {readOnly: false},
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: 'Domestic Violence Shelter Resource',
                type: 'map',
                roam: true,
                map: 'missouri',
                itemStyle:{
                    emphasis:{label:{show:true}}
                },
                data:[
                    {'name': 'Barton', 'value': 1253
                    },
                    {'name': 'Gentry', 'value': 3579
                    },
                    {'name': 'Barry', 'value': 1852
                    },
                    {'name': 'Cape Girardeau', 'value': 1003
                    },
                    {'name': 'McDonald', 'value': 4950
                    },
                    {'name': 'Stoddard', 'value': 1943
                    },
                    {'name': 'Hickory', 'value': 2368
                    },
                    {'name': 'Howard', 'value': 2792
                    },
                    {'name': 'Linn', 'value': 4690
                    },
                    {'name': 'Caldwell', 'value': 1550
                    },
                    {'name': 'Schuyler', 'value': 288
                    },
                    {'name': 'Polk', 'value': 2183
                    },
                    {'name': 'St. Clair', 'value': 4601
                    },
                    {'name': 'Andrew', 'value': 4231
                    },
                    {'name': 'Lafayette', 'value': 4550
                    },
                    {'name': 'Clark', 'value': 582
                    },
                    {'name': 'Worth', 'value': 4531
                    },
                    {'name': 'Randolph', 'value': 3994
                    },
                    {'name': 'Vernon', 'value': 2783
                    },
                    {'name': 'Johnson', 'value': 2294
                    },
                    {'name': 'Clay', 'value': 502
                    },
                    {'name': 'Reynolds', 'value': 1790
                    },
                    {'name': 'Texas', 'value': 3261
                    },
                    {'name': 'Dunklin', 'value': 4884
                    },
                    {'name': 'Lawrence', 'value': 2561
                    },
                    {'name': 'Jackson', 'value': 2456
                    },
                    {'name': 'Chariton', 'value': 1743
                    },
                    {'name': 'Cooper', 'value': 3669
                    },
                    {'name': 'Benton', 'value': 2922
                    },
                    {'name': 'Morgan', 'value': 3795
                    },
                    {'name': 'Butler', 'value': 739
                    },
                    {'name': 'Gasconade', 'value': 1771
                    },
                    {'name': 'Lincoln', 'value': 1838
                    },
                    {'name': 'DeKalb', 'value': 4595
                    },
                    {'name': 'St. Louis', 'value': 1407
                    },
                    {'name': 'Scott', 'value': 4223
                    },
                    {'name':'Miller', 'value': 2084
                    },
                    {'name': 'Shelby', 'value': 1800
                    },
                    {'name': 'Pike', 'value': 1423
                    },
                    {'name': 'Cass', 'value': 477
                    },
                    {'name': 'Macon','value': 4216
                    },
                    {'name': 'Daviess', 'value': 2919
                    },
                    {'name': 'Grundy', 'value': 2462
                    },
                    {'name': 'Douglas', 'value': 2091
                    },
                    {'name': 'Howell', 'value': 928
                    },
                    {'name': 'Dent', 'value': 2083
                    },
                    {'name': 'St. Francois', 'value': 3791
                    },
                    {'name': 'Oregon', 'value': 4473
                    },
                    {'name': 'Ripley', 'value': 2741
                    },
                    {'name': 'Knox', 'value': 2158
                    },
                    {'name': 'Maries', 'value': 216
                    },
                    {'name': 'Mississippi', 'value': 793
                    },
                    {'name': 'Crawford', 'value': 3474
                    },
                    {'name': 'Laclede', 'value': 46
                    },
                    {'name': 'Saline', 'value': 3351
                    },
                    {'name': 'Atchison', 'value': 0
                    },
                    {'name': 'Jefferson', 'value': 4918
                    },
                    {'name': 'Washington', 'value': 1590
                    },
                    {'name': 'Wright', 'value': 1866
                    },
                    {'name': 'Iron', 'value': 2534
                    },
                    {'name': 'Stone', 'value': 4291
                    },
                    {'name': 'Cole', 'value': 1971
                    },
                    {'name': 'Franklin', 'value': 805
                    },
                    {'name': 'Phelps', 'value': 1644
                    },
                    {'name': 'Marion', 'value': 4967
                    },
                    {'name': 'Ralls', 'value': 4658
                    },
                    {'name': 'Webster', 'value': 1662
                    },
                    {'name': 'Audrain', 'value': 756
                    },
                    {'name': 'Ste. Genevieve', 'value': 498
                    },
                    {'name': 'Dade', 'value': 1773
                    },
                    {'name': 'Camden', 'value': 3714
                    },
                    {'name': 'Greene', 'value': 257
                    },
                    {'name': 'Livingston', 'value': 2408
                    },
                    {'name': 'Callaway', 'value': 3934
                    },
                    {'name': 'Pulaski', 'value': 719
                    },
                    {'name': 'Nodaway', 'value': 3003
                    },
                    {'name': 'Ray', 'value': 1600
                    },
                    {'name': 'Buchanan', 'value': 2776
                    },
                    {'name': 'Scotland', 'value': 286
                    },
                    {'name': 'Pettis', 'value': 3329
                    },
                    {'name': 'Harrison', 'value': 2305
                    },
                    {'name': 'Newton', 'value': 1415
                    },
                    {'name': 'Sullivan', 'value': 4071
                    },
                    {'name': 'Ozark', 'value': 3335
                    },
                    {'name': 'Holt', 'value': 4853
                    },
                    {'name': 'Carter', 'value': 4040
                    },
                    {'name': 'Lewis', 'value': 4309
                    },
                    {'name': 'Moniteau', 'value': 2566
                    },
                    {'name': 'Shannon', 'value': 3461
                    },
                    {'name': 'Taney', 'value': 2792
                    },
                    {'name': 'St. Charles', 'value': 1140
                    },
                    {'name': 'Carroll', 'value': 4731
                    },
                    {'name': 'Adair', 'value': 3543
                    },
                    {'name': 'Clinton', 'value': 543
                    },
                    {'name': 'Bollinger', 'value': 330
                    },
                    {'name': 'Monroe', 'value': 4432
                    },
                    {'name': 'St. Louis', 'value': 254
                    },
                    {'name': 'Bates', 'value': 3661
                    },
                    {'name': 'Mercer', 'value': 3713
                    },
                    {'name': 'Cedar', 'value': 1970
                    },
                    {'name': 'Montgomery', 'value': 1094
                    },
                    {'name': 'Henry', 'value': 3179
                    },
                    {'name': 'Osage', 'value': 4345
                    },
                    {'name': 'New Madrid', 'value': 2328
                    },
                    {'name': 'Putnam', 'value': 1448
                    },
                    {'name': 'Platte', 'value': 3627
                    },
                    {'name': 'Warren', 'value': 4797
                    },
                    {'name': 'Perry', 'value': 572
                    },
                    {'name': 'Christian', 'value': 192
                    },
                    {'name': 'Wayne', 'value': 1100
                    },
                    {'name': 'Madison', 'value': 820
                    },
                    {'name': 'Dallas', 'value': 1610
                    },
                    {'name': 'Pemiscot', 'value': 2699
                    },
                    {'name': 'Jasper', 'value': 2652
                    },
                    {'name': 'Boone', 'value': 1541
                    }
                ]
            }
        ],
        /*
        geo: {
            map: 'missouri',
            itemStyle: {					// 定义样式
                normal: {					// 普通状态下的样式
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {					// 高亮状态下的样式
                    areaColor: '#2a333d'
                }
            }
        },
        */
       // backgroundColor: '#404a59',
    }

    mapChart.setOption(option);

});

