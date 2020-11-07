$(document).ready(function () {
	var form = {
		'form_title':'Patien Register',
		'form_groups':[
			{
				'form_group_name':'step 1',
				'form_group_id':'og-1',
				'form_group_options':[
					{'description':'Patient name',"input":{"name":'PatientName','datatype':'text','value':''}},
					{'description':'Patient email address',"input":{"name":'Email','datatype':'email','value':''}},
					{"description":'Patient biography',"input":{"name":"biography","datatype":"texteara","value":''}},
					{"description":'Date of birth',"input":{"name":"BirthDate","datatype":"datepicker","value":''}},
					{"description":'Select your formula',"input":{"name":"Formula","datatype":"checkbox","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
					{"description":'Select your Gender',"input":{"name":"Gender","datatype":"radiobutton","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
					{"description":'Patient country',"input":{"name":"Country","datatype":"dropdown","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
				]
			},
			{
				'form_group_name':'step 2',
				'form_group_id':'og-2',
				'form_group_options':[
					{'description':'Patient name',"input":{"name":'PatientName','datatype':'text','value':''}},
					{'description':'Patient email address',"input":{"name":'Email','datatype':'email','value':''}},
					{"description":'Patient biography',"input":{"name":"biography","datatype":"texteara","value":''}},
					{"description":'Date of birth',"input":{"name":"BirthDate","datatype":"datepicker","value":''}},
					{"description":'Select your formula',"input":{"name":"Formula","datatype":"checkbox","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
					{"description":'Select your Gender',"input":{"name":"Gender","datatype":"radiobutton","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
					{"description":'Patient country',"input":{"name":"Country","datatype":"dropdown","options":[{"key":"option_1","label":'option 1'},{"key":"option_2","label":'option 2'}],"count":2}},
				]
			},
			
		],
		"count":2,
	};
	
	var $showPreviewBtn = $('.preview-form');
	var $closePreviewBtn = $('.close-form-preview');
	var $formPreviewContainer = $('#preview-from-container');
	var $formPreviewRender = $('#preview-from-render form fieldset');
	var $formTitle = $('#preview-form-title');
	
	$(document).on('click','.preview-form',function(event){
		event.preventDefault();
	    event.stopPropagation();
	    $showPreviewBtn.hide();
	    $formTitle.html('<h2 class="b">'+form.form_title+'</h2>');
	    $.each( form.form_groups, function( key, value ) {
	    	var $formgroup = $('<div class="row"><div class="col-md-12"><div class="option-group" id="'+value.form_group_id+'"><h2>'+value.form_group_name+'</h2></div></div></div>');
	    	$formPreviewRender.append($formgroup);
	    	var $formgroupContainer = $('#'+value.form_group_id);
	    	$.each( value.form_group_options, function( key, value ) {
	    		switch (value.input.datatype) { 
	    			case 'text': 
	    				renderTextInput(value,$formgroupContainer);
	    				break;
    				case 'email': 
    					renderEmailInput(value,$formgroupContainer);
    				break;
    				case 'texteara': 
    					renderTextareaInput(value,$formgroupContainer);
    				break;
    				case 'datepicker': 
    					renderDatepickerInput(value,$formgroupContainer);
    				break;
    				case 'checkbox': 
    					renderCheckboxInput(value,$formgroupContainer);
    				break;
    				case 'radiobutton': 
    					renderRadioInput(value,$formgroupContainer);
    				break;
    				case 'dropdown': 
    					renderDropdownInput(value,$formgroupContainer);
    				break;
	    		}
	    		//alert( key + ": " + value.description );
	    	});
	    	//alert( key + ": " + value );
	    });
		$formPreviewContainer.fadeIn();


		
	});
	$(document).on('click','.close-form-preview',function(event){
		event.preventDefault();
	    event.stopPropagation();
	    $formPreviewRender.empty();
		$formPreviewContainer.fadeOut();
		$showPreviewBtn.show();
	});

	function renderEmailInput(data,$formgroup){
		var html = '<div class="form-group">'
                        +'<label for="'+data.input.name+'">'+data.description+'</label>'
                        +'<input type="email" class="form-control" name="'+data.input.name+'" id="'+data.input.name+'">'
                    '</div>';
        $formgroup.append(html);
	}
	function renderTextInput(data,$formgroup){
		var html = '<div class="form-group">'
                        +'<label for="'+data.input.name+'">'+data.description+'</label>'
                        +'<input type="text" class="form-control" name="'+data.input.name+'" id="'+data.input.name+'">'
                    '</div>';
        $formgroup.append(html);
	}

	function renderTextareaInput(data,$formgroup){
		var html = '<div class="form-group">'
                        +'<label for="'+data.input.name+'">'+data.description+'</label>'
                        +'<textarea type="email" class="form-control " name="'+data.input.name+'" id="'+data.input.name+'"></textarea>'
                    '</div>';
        $formPreviewRender.append(html);
	}
	function renderRadioInput(data,$formgroup){
		var optionGroupHtml = $('<div class="form-group"><label>'+data.description+'</label></div>');
		$.each(data.input.options, function( key, option ) {
			var option = '<div class="custom-control custom-radio">'
                            +'<input type="radio" class="custom-control-input" name="'+data.input.name+'" id="rd'+option.key+'">'
                            +'<label class="custom-control-label" for="rd'+option.key+'">'+option.label+'</label>'
                          +'</div>';
            optionGroupHtml.append(option);
		});
		var dg = optionGroupHtml.html();
        $formgroup.append(optionGroupHtml);
	}

	function renderCheckboxInput(data,$formgroup){
		var optionGroupHtml = $('<div class="form-group"><label>'+data.description+'</label></div>');
		$.each(data.input.options, function( key, option ) {
			var option = '<div class="custom-control custom-checkbox">'
                            +'<input type="checkbox" class="custom-control-input" name="'+data.input.name+'[]" id="cbx'+option.key+'">'
                            +'<label class="custom-control-label" for="cbx'+option.key+'">'+option.label+'</label>'
                          +'</div>';
            optionGroupHtml.append(option);
		});
		var dg = optionGroupHtml.html();
        $formgroup.append(optionGroupHtml);
	}
	function renderDatepickerInput(data,$formgroup){
		var html = '<div class="form-group">'
							+'<label for="'+data.input.name+'">'+data.description+'</label>'
							+'<div class="input-group input-group-alt flatpickr custom-flatpickr" id="'+data.input.name+'" >'
                				+'<input type="text" class="form-control " data-input="" name="'+data.input.name+'" >'
                				+'<div class="input-group-append">'
                  					+'<button type="button" class="btn btn-secondary" data-toggle="">'
                    					+'<i class="far fa-calendar"></i>'
                  					+'</button>'
                  					+'<button type="button" class="btn btn-secondary" data-clear="">'
                    					+'<i class="fa fa-times"></i>'
                 					+'</button>'
               					+'</div>'
             				+' </div>'
            			+'</div>';
        $formgroup.append(html);
        flatpickr('#'+data.input.name, {
          disableMobile: true,
          wrap: true
         });
	}

	function renderDropdownInput(data,$formgroup){
		var optionGroupHtml = $('<div class="form-group"><label for="'+data.description+'">'+data.description+'</label><select class="custom-select" id="'+data.input.name+'" required=""></div>');
		$formgroup.append(optionGroupHtml);
		$.each(data.input.options, function( key, option ) {
			//var option = '<option value="'+option.key+'"> '+option.label+' </option>';
			$('#'+data.input.name).append($('<option>', {value:option.key, text:option.label}));
            //optionGroupHtml.append(option);
		});
		//var dg = optionGroupHtml.html();
        //$formPreviewRender.append(optionGroupHtml);
	}

	
});