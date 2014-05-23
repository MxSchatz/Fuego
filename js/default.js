(function($){



	//var formatted = $(title).text();
	// $('#top').addClass(formatted);

	//conditions of use
	if ($("#t1_t2_c_p_lbnOK").length > 0)
		{
	    	$("#mainContent table").addClass("cou");
		}


	// add default thumbnail if none available
	$(".ProductListImageCell").not(':has("img")').prepend('<i class="icon-camera" style="font-size: 30px;display: block; margin-top:5%;color:#E5E5E5;"></i>');

 

    // clone side nav into mega nav
    $("#SubNav").clone().appendTo($("#mega"));
    $('#mega #SubNav, #mega ul, #mega li ').removeAttr('class').attr('class', '');
    
    
    // need a class on parent categories displayed in mega
    $("#mega ul > li a").not("ul li ul a").addClass("mega-parent");
    
    if ($('#LeftNav ul').hasClass('DynamicSubNav')) {
            
    // fade content when hovering dynamic sub nav enable    
    $(".DynamicSubNav li:has(ul) a").hover(function(){
        $('#mainContent').stop().animate({
            "opacity": 0.35
        });
    }, function(){
        $('#mainContent').stop().animate({
            "opacity": 1
        });
    });
		
		// show product menu when hover over products nav button
        
//        $('.SubNavHeader').wrapInner('<div class="view-all" style="width: 200px; margin-left: -10px;font-size: 16px;display: table-cell;  background-color:#E5E5E5; vertical-align: middle;" />');
//        $('.view-all').prepend('<span class="view-all-button"style=" display: inline-block;text-shadow: none;background-color:#646F7D;border-right: 1px solid #d6d6d6;text-align: center;padding: 15px 20px 15px 0;margin-right: 15px;margin-left: -10px;"><i class="icon-plus" style="color:#fff;"></i></span> All ');
//        $('.view-all-button').click(function(){
//
//            $('#mega').toggle();
//            $(".view-all-button").toggleClass('view-all-open');
//        });

        $('.SubNavHeader').wrapInner('<div class="view-all" style="width: 200px; margin-left: -10px;font-size: 16px;display: table-cell;  background-color:#E5E5E5; vertical-align: middle;" />');
        $('.view-all').prepend('<span class="view-all-button"style=" display: inline-block;text-shadow: none;background-color:#646F7D;border-right: 1px solid #d6d6d6;text-align: center;padding: 10px 20px 10px 0;margin-right: 15px;margin-left: -10px;"><i class="icon-plus" style="color:#fff;"></i></span> All ');
        $('.view-all-button').click(function(){

            $('#mega').toggle();
            $(".view-all-button").toggleClass('view-all-open');
        });
    }
	
	// remove float
	if ($('div:contains("Display Columns")').length > 0) {
    $("#mainContent div").css('float', '');
}

	
    // hide product menu when leave product menu container
    $("#mega").hover(function(){
        // focus
    
    }, function(){
        // lost focus
        
        timeout = setTimeout(function(){
            $("#mega").stop(true, true).fadeOut(500);
            $(".view-all-button").removeClass('view-all-open');
        }, 300);
    });
    
    // remove default pipes from top nav
    $("a.NavButton").each(function(){
        $(this).text($(this).text().replace("| ", ""));
    });
    
    // fade in #back-top
    $("a#back-top").hide();
    
    $(function(){
        $(window).scroll(function(){
            if ($(this).scrollTop() > 25) {
                $('#back-top').fadeIn();
            }
            else {
                $('#back-top').hide();
            }
        });
        
        // scroll body to 0px on click
        $('a#back-top').click(function(){
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

    
    // retina display icons
    $('a.NavButton[href*="p=Home"]').prepend('<i class="icon-home"></i>');
    $('a.NavButton[href*="p=Catalog"]').prepend('<i class="icon-folder-open"></i>');
    $('a.SubNavQuickOrder[href*="p=QuickOrderEntry"]').prepend('<i class="icon-rocket"></i>');
    $('a.NavButton[href*="p=CartDetail"]').prepend('<i class="icon-shopping-cart"></i>');
    $('a.NavButton[href*="p=OrderSearch"]').prepend('<i class="icon-bar-chart"></i>');
    $('a.NavButton[href*="p=MessageList"]').prepend('<i class="icon-inbox"></i>');
    $('a.NavButton[href*="p=EditUser"]').prepend('<i class="icon-user"></i>');
    $('#t1_t2_c_p_tmplHome_ctlOrderSearch_hplFavoriteOrders, #t1_t2_c_p_hplFavoriteOrders').prepend('<i class="icon-star"></i>');
    $('a.NavButton[href*="javascript:void(OpenContactWindow());"]').prepend('<i class="icon-envelope"></i>');
	
    $('#Date').prepend('<i class="icon-calendar"></i>');
    $('#ProductSearch ul > li > a').prepend('<i class="icon-expand-alt" style="margin-right: 5px;color: #646F7D;font-size: 16px;"></i>');
    $('#t1_t2_btnProductSearch').prepend('<i class="icon-search" style="color:#49525D; font-size: 22px;"></i>');
    $('a.mega-parent[href]').prepend('<i class="icon-folder-open" style="margin-right: 5px;"></i>');
    $('#t1_t2_c_p_catCrumbs a:first-child').prepend('<i class="icon-folder-open" style="margin-left: 5px; margin-right: 5px; color:#fa2a29; text-decoration: none;"></i>');
    $('.CheckoutProgressBarCurrentStage').prepend('<i class="icon-shopping-cart" style="margin-left: 5px; color:#fa2a29;margin-right: 5px; text-decoration: none;font-size: 14px;"></i>');
    
	// IE: O Placeholder, Placeholder! Wherefore art thou Placeholder?
    $("#t1_t2_txbProductSearch").attr("placeholder", "To search type and hit enter");
    $("#t1_t2_c_p_ddlAddresses_txbSearch").attr("placeholder", "Choose Address");
    
    // need to remove inline styles on category images and product td to accurately scale content
    $('.CategoryTable img, #productsTable img, #productsTable td').removeAttr('style');

    // sub nav headings that contain links need no padding
    $(".SubNavHeader:has(> a)").css('padding', '0');
    
    //cart content
    if ($451.OrderDetails != null) {
        var cartTotals = $("#cartContents");
        cartTotals.append("<ul>");
        var cartUL = $("#cartContents ul");
        var i = 0;
		
        $451.OrderDetails.lineItems.forEach(function(line){
            cartUL.append("<li id=line" + i + ">");
            $("#line" + i + "").append("<span> " + $451.OrderDetails.lineItems[i].quantity + "</span>");
            $("#line" + i + "").append("<span> " + $451.OrderDetails.lineItems[i].productName + "</span>");
            $("#line" + i + "").append("<span> $" + $451.OrderDetails.lineItems[i].lineTotal + "</span>");
            i++;
			$('#cartContents ul li').hide();
			
			$('#cartContents ul li:lt(10)').show();
			if ($('#cartContents ul li').length > 10) {
			     cartUL.append("<li><p>...Displaying first 10 items in your cart.</p></li>");
			
	}
        });

    }
    else {
        $("#cartContents").remove();
    }
    var timeout;
    $("#cartButton").hover(function(){
        // focus
        timeout = setTimeout(function(){
            $("#cartContents").fadeIn();
        }, 400);
        
    }, function(){
        // lost focus
        clearTimeout(timeout);
        $("#cartContents").fadeOut();
    });
    
    // cart details
    if ($451.OrderDetails != null) {
        var cartCount = $451.OrderDetails.lineItems.length;
        var cartTotal = $451.OrderDetails.orderTotal;
        var oldText = $('a#CartCount').text();
        var newText = oldText.replace('$CartCount', 'Items: ' + cartCount);
        newText = newText.replace('$CartTotal', 'Total: $' + cartTotal);
        $('a#CartCount').text(newText);
    }
    else {
        $('a#CartCount').text('Items: 0 Total: $0.00');
    }
    
    //hide redundant subnavheader items
    var searchText = 'Messages';
	    $('.SubNavHeader').filter(function(){
        return $(this).text() === searchText;
    }).css('display', 'none');
  
    var searchText = 'Products';
	    $('.SubNavHeader').filter(function(){
        return $(this).text() === searchText;
    }).css('display', 'none');
	
	var searchText = 'Producten';
    $('.SubNavHeader').filter(function(){
        return $(this).text() === searchText;
    }).css('display', 'none');
    
    var searchText = 'Reports';
     $('.SubNavHeader').filter(function(){
        return $(this).text() === searchText;
    }).css('display', 'none');
    

    
    //sidenav display state
    var pages = {
        //Page Title : //SubNav Link
        'OrderSearch': ['Order Search'],
        'OrderReport': ['Order Report'],
        'LineItemReport': ['Line Item Report'],
        'InventoryReport': ['Inventory Report'],
        'PendingApprovalReport': ['Pending Approval Report'],
        'SpendingAccountReport1': ['Account Status Report'],
        'SpendingAccountReport2': ['Account Transaction Report'],
        'ShipmentReport': ['Shipment Report'],
        'SavedReports': ['Saved Reports'],
        'ReceivedMessages': ['Received'],
        'SentMessages': ['Sent'],
        'ComposeMessage': ['Compose'],
        'Admin': ['Self Admin'],
        'ListUsers': ['Administer Users'],
        'CloneUser': ['Clone User'],
        'NewUser': ['New User'],
        'CategoryAdmin': ['Administer Catalog'],
        'CreditCards': ['Stored Credit Cards'],
        'EditCreditCard': ['New Credit Card'],
        'LineItemReport': ['Line Item Report'],
        'CategoryAdmin': ['Administer Catalog'],
        'Cart': [''],
        'Home': [''],
		'MessageDetail': [''],
		'Order': ['']
		
    };
    
    //Product SubNav
    if ($("#t1_t2_c_p_catCrumbs").length > 0) {
        var selectedCategory = $("#t1_t2_c_p_catCrumbs a:eq(1)").text().replace(/[^a-zA-Z]/g, '');
        $("#SubNav li.menuparent a").each(function(){
            var aText = $(this).text().replace(/[^a-zA-Z]/g, '');
            if (aText == selectedCategory) {
                $(this).parent('li').addClass('SubNavSelectedItem');
            }
        });
    }
    //Reports, Messages, and My Account
    else {
        var selectedPage = $("#PageTitle").text().replace(/[^a-zA-Z]/g, '');
        //There are two pages named Spending Account Report
        if (selectedPage == 'SpendingAccountReport') {
            if ($("#t1_t2_c_p_rptTransactions_ddlUser").length > 0) {
                selectedPage = 'SpendingAccountReport2';
            }
            else {
                selectedPage = 'SpendingAccountReport1';
            }
        }
        //Find the correct a tag, then add the class to its direct parent
        $("#LeftNav a").each(function(){
            var aText = $(this).text();
            if (aText == pages[selectedPage][0]) {
                $(this).parent().addClass('SubNavSelectedItem');
            }
        });
    }

    //fixes the parent text width so it doesn't overlay on top of
//    $(".MenuArrow").parent().css("width","180px");
    
    
})(jQuery);
