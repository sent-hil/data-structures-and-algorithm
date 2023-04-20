def sums(arr)
  results = []

  arr.each do |item|
    # can't add to the same members while iterating it, so we dup it
    members = results.dup
    members.each { |s_item| results.push(item + s_item) if s_item }

    results.push(item)
  end

 results
end

describe "Subsets" do
  it "returns all possible sum combinations given array of integers" do
    expect(sums([1])).to eq([1])
    expect(sums([1,2]).sort).to eq([1,2,3])
    expect(sums([1,2,3]).sort).to eq([1,2,3,3,4,5,6])
  end
end