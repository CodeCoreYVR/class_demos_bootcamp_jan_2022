class QuestionCollectionSerializer < ActiveModel::Serializer
  #If the serializer name does not match the model (like question_sertializer matches question.rb),
  #then we need to specify in the specific controller action which serializer to use,
  #with the method "each_serializer" - see questions_controller#index
  attributes :id, :title
end
