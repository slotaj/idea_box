function deleteIdea(){
  $('.ideas-list').delegate('.delete-idea','click', function(){
    var $idea = $(this).closest(".idea")
      $.ajax({
      type: 'DELETE',
      url: 'api/v1/ideas/'+ $idea.children().children().attr("data-id"),
      success: function() {
        $idea.remove()
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  })
}
