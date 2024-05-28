# Create DynamoDB table 
resource "aws_dynamodb_table" "visiting_table" {
    name = "visiting_table"
    billing_mode = "PAY_PER_REQUEST"

    attributes= [
        {
        name = "record_id"
        type = "N"
        }
    ]
   
}