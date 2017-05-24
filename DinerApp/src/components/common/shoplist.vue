<template>
	<div class="shoplist_container">
		<ul v-load-more="loaderMore" v-if="shopListArr.length" type="1">
			<router-link :to="{path: 'shop', query:{geohash, id: item.id}}" v-for="item in shopListArr" tag='li' :key="item.id" class="shop_li">
				<section>
					<img :src="item.image_path" class="shop_img">
				</section>
				<hgroup class="shop_right">
					<header class="shop_detail_header">
						<h4 :class="item.is_premium? 'premium': ''" class="" class="shop_title ellipsis">{{item.name}}</h4>
						<ul class="shop_detail_ul">
							<li v-for="item in item.supports" :key="item.id" class="supports">{{item.icon_name}}</li>
						</ul>
					</header>
					<h5 class="rating_order_num">
						<section class="rating_order_num_left">
							<section class="rating_section">
								<rating-star :rating='item.rating'></rating-star>
								<span class="rating_num">{{item.rating}}</span>
							</section>
							<section class="order_section">
								月售{{item.recent_order_num}}单
							</section>
						</section>
						<section class="rating_order_num_right">
							<span class="delivery_style delivery_left" v-if="item.delivery_mode">{{item.delivery_mode.text}}</span>
							<span class="delivery_style delivery_right" v-if="zhunshi(item.supports)">准时达</span>
						</section>
					</h5>
					<h5 class="fee_distance">
						<p class="fee">
							¥{{item.float_minimum_order_amount}}起送 
							<span class="segmentation">/</span>
							{{item.piecewise_agent_fee.tips}}
						</p>
						<p class="distance_time">
							<span v-if="Number(item.distance)">{{item.distance > 1000? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}}
								<span class="segmentation">/</span>
							</span>
							<span v-else>{{item.distance}}</span>
							<span class="segmentation">/</span>
							<span class="order_time">{{item.order_lead_time}}</span>
						</p>
					</h5>
				</hgroup>
			</router-link>
		</ul>
		<p v-if="touchend" class="empty_data">没有更多了</p>
		<aside class="return_top" @click="backTop" v-if="showBackStatus">
			<svg class="back_top_svg">
				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#backtop"></use>
			</svg>
		</aside>
		<div ref="abc" style="background-color: red;"></div>
	</div>
</template>

<script>

import {mapState} from 'vuex'
import {shopList} from 'src/service/getData'
import {imgBaseUrl, localapi, proapi} from 'src/config/env'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import loading from './loading'
import ratingStar from './ratingStar'

function getImage (name) {
	return require(`../../images/idg/shop/${name}.png`)
}

export default {
	data(){
		return {
			offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
			shopListArr:[
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: "Chan's Place 陳家園",
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(1),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: "Chan's Place 陳家園",
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'Ten Mile Aroma 十里香',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(2),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'Ten Mile Aroma 十里香',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'Si Chuan Home 沸騰魚香',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(3),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'Si Chuan Home 沸騰魚香',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'House of Kee 世澤樓',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(4),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'House of Kee 世澤樓',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'Taste of Jiangnan 江南味道',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(5),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'Taste of Jiangnan 江南味道',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'Szechuan Chinese Restaurant 四川飯店',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(6),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'Szechuan Chinese Restaurant 四川飯店',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
				{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'San Tung Chinese Restaurant 山東小館',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(7),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'San Tung Chinese Restaurant 山東小館',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				},
						{
					activities: [
						{ attribute: '{"35": {"1": 10, "0": 0}, "55": {"1": 20, "0": 0}}', description: '满35减10，满55减20', icon_color: 'f07373', icon_name: '减', id: 26088324, is_exclusive_with_food_activity: true, name: '满减优惠', tips: '满35减10，满55减20', type: 102 },
						{ attribute: '17.0', description: '新用户下单立减17.0元', icon_color: '70bc46', icon_name: '新', id: 26085530, is_exclusive_with_food_activity: true, name: '新用户立减(不与其他活动共享)', tips: '新用户下单立减17.0元', type: 103 },
					],
					address: '湖北路乐业村9-1号',
					authentic_id: 896076,
					average_cost: '¥11/人',
					delivery_mode: {
						color: '57A9FF',
						id: 1,
						is_solid: true,
						text: '蜂鸟专送'
					},
					description: 'Golden China Restaurant',
					distance: 551,
					float_delivery_fee: 4,
					float_minimum_order_amount: 20,
					id: 896076,
					image_path: getImage(8),
					is_new: false,
					is_premium: true,
					is_stock_empty: 0,
					latitude: 32,
					longitude: 118,
					max_applied_quantity_per_order: -1,
					name: 'Golden China Restaurant',
					next_business_time: '',
					only_use_poi: false,
					opening_hours: ['10:00/21:55'],
					order_lead_time: 25,
					phone: '13451852190',
					piecewise_agent_fee: {
						description: '配送费¥4',
						extra_fee: 0,
						is_extra: false,
						rules: [
							{ fee: 4, price: 20 }
						],
						tips: '配送费¥4'
					},
					promotion_info: '珍珠类，奶霜类饮品，每日早上11：00后贩卖。另因奶霜系列外送途中摇晃易融化，敬请谅解谢谢。',
					rating: 4.7,
					rating_count: 1152,
					recent_order_num: 1512,
					recommend: {
						image_hash: 'ff085f835038a87ae040a8cd53338f4cjpeg',
						track: '{"rankType":"3"}'
					},
					regular_customer_count: 0,
					status: 1,
					supports: [
						{
							description: '已加入“外卖保”计划，食品安全有保障',
							icon_color: '999999',
							icon_name: '保',
							id: 7,
							name: '外卖保'
						},
						{
							description: '准时必达，超时秒赔',
							icon_color: '57A9FF',
							icon_name: '准',
							id: 9,
							name: '准时达'
						}
					],
					type: 0
				}
			], // 店铺列表数据
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			showBackStatus: false, //显示返回顶部按钮
			showLoading: true, //显示加载动画
			touchend: false, //没有更多数据
			imgBaseUrl,
			localapi,
			proapi
		}
	},
	mounted(){
		this.initData();
	},
	components: {
		loading,
		ratingStar,
	},
	props: ['restaurantCategoryId', 'restaurantCategoryIds', 'sortByType', 'deliveryMode', 'supportIds', 'confirmSelect', 'geohash'],
	mixins: [loadMore, getImgPath],
	computed: {
		...mapState([
			'latitude','longitude'
		]),
	},
	updated(){
		// console.log(this.supportIds, this.sortByType)
	},
	methods: {
		async initData(){
			// //获取数据
			// let res = await shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId);
			// this.shopListArr = [...res];
			// if (res.length < 20) {
			// 	this.touchend = true;
			// }
			this.hideLoading();
			// //开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
			// showBack(status => {
			// 	this.showBackStatus = status;
			// });
		},
		//到达底部加载更多数据
		async loaderMore(){
			if (this.touchend) {
				return
			}
			//防止重复请求
			if (this.preventRepeatReuqest) {
				return 
			}
			this.showLoading = true;
			this.preventRepeatReuqest = true;

			//数据的定位加20位
			this.offset += 20;
			let res = await shopList(this.latitude, this.longitude, this.offset, this.restaurantCategoryId);
			this.hideLoading();
			this.shopListArr = [...this.shopListArr, ...res];
			//当获取数据小于20，说明没有更多数据，不需要再次请求数据
			if (res.length < 20) {
				this.touchend = true;
				return
			}
			this.preventRepeatReuqest = false;
		},
		//返回顶部
		backTop(){
			animate(document.body, {scrollTop: '0'}, 400,'ease-out');
		},
		//监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据
		async listenPropChange(){
			this.showLoading = true;
			this.offset = 0;
			let res = await shopList(this.latitude, this.longitude, this.offset, '', this.restaurantCategoryIds, this.sortByType, this.deliveryMode, this.supportIds);
			this.hideLoading();
			//考虑到本地模拟数据是引用类型，所以返回一个新的数组
			this.shopListArr = [...res];
			if (process.env.NODE_ENV !== 'development') {
				this.shopListArr = this.shopListArr.reverse();
			}
		},
		//开发环境与编译环境loading隐藏方式不同
		hideLoading(){
			if (process.env.NODE_ENV !== 'development') {
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					clearTimeout(this.timer);
					this.showLoading = false;
				}, 500)
			}else{
				this.showLoading = false;
			}
		},
		zhunshi(supports){
			let zhunStatus;
			if ((supports instanceof Array) && supports.length) {
 				supports.forEach(item => {
 					if (item.icon_name === '准') {
 						zhunStatus = true;
 					}
 				})
			}else{
				zhunStatus = false;
			}
			return zhunStatus
		},
	},
	watch: {
		//监听父级传来的restaurantCategoryIds，当值发生变化的时候重新获取餐馆数据，作用于排序和筛选
		restaurantCategoryIds: function (value){
			this.listenPropChange();
		},
		//监听父级传来的排序方式
		sortByType: function (value){
			this.listenPropChange();
		},
		//监听父级的确认按钮是否被点击，并且返回一个自定义事件通知父级，已经接收到数据，此时父级才可以清除已选状态
		confirmSelect: function (value){
			this.listenPropChange();
			this.$emit('DidConfrim');
		}
	}
}
</script>

<style lang="scss" scoped>
	@import 'src/style/mixin';
	.shoplist_container{
		background-color: #fff;
		margin-bottom: 2rem;
	}
	.shop_li{
		display: flex;
		border-bottom: 0.025rem solid #f1f1f1;
		padding: 0.7rem 0.4rem;
	}
	.shop_img{
		@include wh(2.7rem, 2.7rem);
		display: block;
		margin-right: 0.4rem;
	}
	.shop_right{
		flex: auto;
		.shop_detail_header{
			@include fj;
			align-items: center;
			.shop_title{
				width: 8.5rem;
				color: #333;
				padding-top: .01rem;
				@include font(0.65rem, 0.65rem, 'PingFangSC-Regular');
				font-weight: 700;
			}
			.premium::before{
				content: '品牌';
				display: inline-block;
				font-size: 0.5rem;
				line-height: .6rem;
				color: #333;
				background-color: #ffd930;
				padding: 0 0.1rem;
				border-radius: 0.1rem;
				margin-right: 0.2rem;
			}
			.shop_detail_ul{
				display: flex;
				transform: scale(.8);
				margin-right: -0.3rem;
				.supports{
					@include sc(0.5rem, #999);
					border: 0.025rem solid #f1f1f1;
					padding: 0 0.04rem;
					border-radius: 0.08rem;
					margin-left: 0.05rem;
				}
			}
		}
		.rating_order_num{
			@include fj(space-between);
			height: 0.6rem;
			margin-top: 0.52rem;
			.rating_order_num_left{
				@include fj(flex-start);
				.rating_section{
					display: flex;
					.rating_num{
						@include sc(0.4rem, #ff6000);
						margin: 0 0.2rem;
					}
				}
				.order_section{
					transform: scale(.8);
					margin-left: -0.2rem;
					@include sc(0.4rem, #666);
				}
			}
			.rating_order_num_right{
				display: flex;
				align-items: center;
				transform: scale(.7);
				min-width: 5rem;
				justify-content: flex-end;
				margin-right: -0.8rem;
				.delivery_style{
					font-size: 0.4rem;
					padding: 0.04rem 0.08rem 0;
					border-radius: 0.08rem;
					margin-left: 0.08rem;
					border: 1px;
				}
				.delivery_left{
					color: #fff;
					background-color: $blue;
					border: 0.025rem solid $blue;
				}
				.delivery_right{
					color: $blue;
					border: 0.025rem solid $blue;
				}
			}
		}
		.fee_distance{
			margin-top: 0.52rem;
			@include fj;
			@include sc(0.5rem, #333);
			.fee{
				transform: scale(.9);
				@include sc(0.5rem, #666);
			}
			.distance_time{
				transform: scale(.9);
				span{
					color: #999;
				}
				.order_time{
					color: $blue;
				}
				.segmentation{
					color: #ccc;
				}
			}
		}
	}
	.loader_more{
		@include font(0.6rem, 3);
		text-align: center;
	    color: #999;
	}
	.empty_data{
		@include sc(0.5rem, #666);
		text-align: center;
		line-height: 2rem;
	}
	.return_top{
		position: fixed;
		bottom: 3rem;
		right: 1rem;
		.back_top_svg{
			@include wh(2rem, 2rem);
		}
	}
	.loading-enter-active, .loading-leave-active {
		transition: opacity 1s
	}
	.loading-enter, .loading-leave-active {
		opacity: 0
	}
</style>