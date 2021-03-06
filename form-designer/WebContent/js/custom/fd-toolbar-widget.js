function createWidgetControls() {
	var arr = [{
		id:'table',
		icon:'url(icon/table.png)',
		title:'表格元素'
	},{
		id:'static-text',
		icon:'url(icon/static_text.png)',
		title:'静态文本'
	},{
		id:'dynamic-text',
		icon:'url(icon/dynamic_text.png)',
		title:'动态文本'
	},{
		id:'text-field',
		icon:'url(icon/text_field.png)',
		title:'文本字段'
	},{
		id:'number-field',
		icon:'url(icon/number_field.png)',
		title:'数字字段'
	},{
		id:'date-field',
		icon:'url(icon/date_field.png)',
		title:'日期字段'
	},{
		id:'condition',
		icon:'url(icon/staff_field.png)',
		title:'条件控制'
	},{
		id:'hidden-field',
		icon:'url(icon/hidden_field.png)',
		title:'隐藏字段'
	},{
		id:'select-field',
		icon:'url(icon/dict_field.png)',
		title:'下拉框字段'
	},{
		id:'check',
		icon:'url(icon/check.png)',
		title:'复选框'
	},{
		id:'iterator',
		icon:'url(icon/iterator.png)',
		title:'数据迭代'
	},{
		id:'page-number',
		icon:'url(icon/page_number.png)',
		title:'当前页码'
	},{
		id:'page-count',
		icon:'url(icon/page_count.png)',
		title:'总共页数'
	},{
		id:'diagnosis',
		icon:'url(icon/diagnosis.png)',
		title:'诊断'
	},{
		id:'nursing',
		icon:'url(icon/nursing.png)',
		title:'护理记录'
	},{
		id:'surgery',
		icon:'url(icon/surgery.png)',
		title:'手术'
	},{
		id:'audit',
		icon:'url(icon/audit.png)',
		title:'审签'
	},{
		id:'plugin',
		icon:'url(icon/plugin.png)',
		title:'插件'
	}];
	for(var i = 0; i < arr.length; i++) {
		createWidgetControl(arr[i]);
	}
}

function createWidgetControl(config) {
	var widgetModel = document.createElement('div');
	$(widgetModel).attr('id', config.id);
	$(widgetModel).attr('title', config.title);
	$(widgetModel).addClass('widget');
	$(widgetModel).addClass('control');
	$(widgetModel).css({
		'background-image': config.icon,
		'background-repeat':'no-repeat',
		'background-position':'center'
	});
	/*标记控件可拖拽*/
	$(widgetModel).bind('mousedown', function(){
		$(this).addClass('draggable');
		$('.droppable').unbind('mouseover');
		$('.droppable').bind('mouseover',function(e) {
			if($('.draggable').length > 0) {
				$('.drop-zone').removeClass('drop-zone');
				$(this).addClass('drop-zone');
			}
			e.stopPropagation();
		});
	});
	$('.widgets').append(widgetModel);
}