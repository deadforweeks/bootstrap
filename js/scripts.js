
        $(function() {
            $('[data-toggle="tooltip"]').tooltip(); 
        })

        $(function() {
            $('[data-toggle="popover"]').popover();
        })

        $(function() {
            $(".carousel").carousel( {
                interval:6000
                // default: 5000 milliseconds                
            });

            $("#carouselButton").click(function() {
            // #carouselButton is the ID, and click() is function that's in jQuery itself
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    // ^^^activate pause function
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    //^^^^remove button pause
                    $("#carouselButton").children("i").addClass("fa-play"); //display play
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    //^^^^remove button play
                    $("#carouselButton").children("i").addClass("fa-pause"); //display pause
                }
            });
            // $("#carouselPlay").click(function() {
            //     $(".carousel").carousel("cycle");
        
        //reserve button and modal button
        //class challenge

        //click function for reserve campsite:
            $("#reserveButton").click(function() {
                $("#reserveModal").modal("show")
                // reserveModal^^^^ is the modal ID as defined HTMLindex
            })

            $("#reserveButton2").click(function() {
                $("#reserveModal").modal("show")
                // reserveModal^^^^ is the modal ID as defined HTMLindex
            })

            $("#loginButton").click(function() {
                $("#loginModal").modal("show");
            })

        })

        $( function() {
            $("#btnShowBanana").click( function() {
              //rule of thumb
              //put all of your jQuery functions in ONE READY FUNCTION.
              $("#banana").collapse("show");
            } )
          } )