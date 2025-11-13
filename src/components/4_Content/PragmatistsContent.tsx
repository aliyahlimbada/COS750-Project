
const codeImplementation = `
#include <iostream>
#include <vector>
#include <memory>

// 1. The Component: Shared interface
class IFileSystemComponent {
public:
    virtual ~IFileSystemComponent() = default;
    virtual int getSize() const = 0;
};

// 2. The Leaf: Basic object
class FileLeaf : public IFileSystemComponent {
    std::string name;
    int size;
public:
    FileLeaf(const std::string& n, int s) : name(n), size(s) {}

    int getSize() const override {
        return size; // A file just returns its own size
    }
};

// 3. The Composite: The container
class FolderComposite : public IFileSystemComponent {
    std::string name;
    std::vector<std::shared_ptr<IFileSystemComponent>> children;
public:
    FolderComposite(const std::string& n) : name(n) {}

    void add(const std::shared_ptr<IFileSystemComponent>& component) {
        children.push_back(component);
    }

    int getSize() const override {
        int total = 0;
        for (const auto& child : children)
            total += child->getSize(); // Recursive delegation
        return total;
    }
};

// Example usage
int main() {
    auto file1 = std::make_shared<FileLeaf>("file1.txt", 120);
    auto file2 = std::make_shared<FileLeaf>("file2.txt", 300);
    auto folder = std::make_shared<FolderComposite>("Documents");

    folder->add(file1);
    folder->add(file2);

    std::cout << "Total folder size: " << folder->getSize() << " KB\n";
}

`;

export const PragmatistsContent = () => (
       <div className="visual-container">
    <div className="feature-request-ticket">
  <div className="content-container">
    <h4>The Practical Code Solution</h4>
    <p>Let's solve the feature request from earlier. Here is an implementation in C++. The comments explain the role of each part.</p>
    <div className="code-prompt">
      <pre><code>{codeImplementation.trim()}</code></pre>
    </div>
  </div>
  </div>
  </div>
);