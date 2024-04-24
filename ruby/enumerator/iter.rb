require "json"

# enumerator_iter shows an example of using `Enumerator#new` to iterate through
# entries from multiple files in disk.
#
# Using `Enumerator#new` lets you to use regular Enumerator methods like `each`,
# `take` etc.
def enumerator_iter(folder_glob)
  Enumerator.new do |y|
    Dir.glob(folder_glob).each do |filename|
      entries = JSON.parse(File.read(filename))
      entries.each { |e| y << e }
    end
  end
end

# iter is similar to `enumerator_iter`, but does not use `Enumerator#new`.
def iter(folder_glob, &blk)
  Dir.glob(folder_glob).each do |filename|
    entries = JSON.parse(File.read(filename))
    entries.each(&blk)
  end
end

describe do
  let(:folder_glob) { "data/*.json" }

  it "#enumerator_iter.each" do
    arr = []
    enumerator_iter(folder_glob).each { |e| arr << e }
    expect(arr).to eq([1, 2, 3, 4, 5, 6])
  end

  it "#enumerator_iter.take" do
    arr = enumerator_iter(folder_glob).take(6)
    expect(arr).to eq([1, 2, 3, 4, 5, 6])
  end

  it "#iter" do
    arr = []
    iter(folder_glob) { |e| arr << e }
    expect(arr).to eq([1, 2, 3, 4, 5, 6])
  end
end
