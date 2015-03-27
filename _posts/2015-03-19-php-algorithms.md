---
layout: post
title: "PHP实现四种基本排序算法"
date: 2015-03-19 12:20
categories: [PHP]
tags: [PHP]
---

#####用PHP实现算法

    > 将数组按照从小到大的顺序进行排序;  $arr(1,43,54,62,21,66,32,78,36,76,39);

1. 冒泡排序

    > 原理:从前往后对相邻的两个数依次进行比较和调整,让较大的数往下沉,较小的往上冒;

    ```
    $arr = array(1,43,54,62,21,66,32,78,36,76,39);

    function bubbleSort($arr){
        $len = count($arr);
        //该层循环控制 需要冒泡的轮数
        for($i = 1; $i<len; $i++){
            //该层循环用来控制每轮 冒出一个数 需要比较的次数
            for($k = 0; $k<$len-1; $k++){
                if($arr[$k]>$arr[$k+1]){
                    $tmp = $arr[$k+1];
                    $arr[$k+1] = $arr[$k];
                    $arr[$k] = $tmp;
                }
            }
        }

        return $arr;
    }
    ```

2. 快速排序

    >  原理:选择一个基准元素,通常选择第一个元素或者最后一个元素,通过一趟扫描,将待排序列分成两部分,一部分比基准元素小,一部分大于等于基准元素,此时基准元素在其排好序后的正确位置,然后再用同样的方法递归地排序划分剩下两部分.

    ```
    function quickSort($arr){
        //先判断是否需要继续进行
        $length = count($arr);
        if($length <= 1){
            return $arr;
        }

        //选择第一个元素作为基准
        $base_num = $arr[0];
        //遍历除了标尺外的所有元素,按照大小关系放入两个数组内
        //初始化两个数组
        $left_array = array();    //小于基准的
        $right_array = array();   //大于基准的
        for($i=1;$i<$length;$i++){
            if($base_num > $arr[$i]){
                //放入左边数组
                $left_array[] = $arr[$i];
            }else{
                $right_array[] = $arr[$i];
            }
        }

        //再分别对左边和右边的数组进行相同的排序处理方式递归调用这个函数
        $left_array = quick_sort($left_array);
        $right_array = quick_sort($right_array);
        //合并

        return array_merge($left_array,array($base_num),$right_array);
    }
    ```

3. 选择排序

    > 在要排序的一组数中,选出最小的一个数$p与第一个位置的数交换,然后在剩下的数当中再找最小的与第二个位置的数交换,如此循环到倒数第二个数和最后一个数比较为止.

    ```
    function selectSort($arr){
        //双重循环完成,外层控制轮数,内层控制比较次数
        $len = count($arr);
        for($i=0; $i<len-1; $i++){
            $p = $i;
            for($j=$i+1; $j<$len; $j++){
                //$arr[$p]是当前已知的最小值
                if($arr[$p] > $arr[$j]){
                    $p = $j;
                }
            }

            if($p != $i){
                $tmp = $arr[$p];
                $arr[$p] = $arr[$i];
                $arr[$i] = $tmp;
            }
        }

        //返回最终结果
        return $arr;
    }
    ```

4. 插入排序

    > 在要排序的一组数中,假设前面的数已经是排好顺序的,现在要把第n个数插到前面的有序数中,使得这n个数也是排好顺序的,如此反复循环,直到全部排好顺序.

    ```
    $arr = array(1,43,54,62,21,66,32,78,36,76,39);

    function insertSort($arr){
        $len = count($arr);
        for($i=1,$i<len;$i++){
            $tmp = $arr[$i];
            //内层循环控制,比较并插入
            for($j=$i-1; $j>0; $j--){
                if($tmp<$arr[$j]){
                    //发现插入的元素要小,交换位置,将后面的元素与前面的元素互换.
                    $arr[$j+1] = $arr[$j];
                    $arr[$j] = $tmp;
                }else{
                    /*如果碰到不需要移动的元素,由于是已经排序好的数组,
                     *则前面的就不需要再次比较了.
                     */
                    break;
                }
            }
        }
    }
    ```