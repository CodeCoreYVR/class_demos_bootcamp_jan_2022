class CreateAnswers < ActiveRecord::Migration[7.0]
  def change
    create_table :answers do |t|
      t.text :body
      t.references :question, null: false, foreign_key: true
      # the above creates a 'question_id' column foreign key
      # it associates to the questions table
      # the value inside this column can't be null

      # it will also add an index to this foreign key column(question_id)
      t.timestamps
    end
  end
end
